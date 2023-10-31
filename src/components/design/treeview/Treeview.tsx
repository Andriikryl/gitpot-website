import clsx from "clsx";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import isHotkey from "is-hotkey";
import style from "./style.module.css";
import {
  createContext,
  Dispatch,
  KeyboardEvent,
  ReactNode,
  useContext,
  useReducer,
} from "react";

import {
  getFirstFocusableId,
  getLastFocusableId,
  getNextFocusableId,
  getNextFocusableIdByTypeahead,
  getParentFocusableId,
  getPrevFocusableId,
  RovingTabindexItem,
  RovingTabindexRoot,
  useRovingTabindex,
} from "./roving-tabindex";

export type TreeViewState = Map<string, boolean>;

export enum TreeViewActionTypes {
  OPEN = "OPEN",
  CLOSE = "CLOSE",
}

export type TreeViewActions =
  | {
      type: TreeViewActionTypes.OPEN;
      id: string;
    }
  | {
      type: TreeViewActionTypes.CLOSE;
      id: string;
    };
export function treeviewReducer(
  state: TreeViewState,
  action: TreeViewActions
): TreeViewState {
  switch (action.type) {
    case TreeViewActionTypes.OPEN:
      return new Map(state).set(action.id, true);

    case TreeViewActionTypes.CLOSE:
      return new Map(state).set(action.id, false);

    default:
      throw new Error("Tree Reducer received an unknown action");
  }
}

export type TreeViewContextType = {
  open: TreeViewState;
  dispatch: Dispatch<TreeViewActions>;
  selectedId: string | null;
  selectId: (id: string) => void;
};

export const TreeViewContext = createContext<TreeViewContextType>({
  open: new Map<string, boolean>(),
  dispatch: () => {},
  selectedId: null,
  selectId: () => {},
});

type RootProps = {
  children: ReactNode | ReactNode[];
  className?: string;
  value: string | null;
  onChange: (id: string) => void;
  label: string;
};

export function Root({
  children,
  className,
  value,
  onChange,
  label,
}: RootProps) {
  const [open, dispatch] = useReducer(
    treeviewReducer,
    new Map<string, boolean>()
  );

  return (
    <TreeViewContext.Provider
      value={{
        open,
        dispatch,
        selectedId: value,
        selectId: onChange,
      }}
    >
      <RovingTabindexRoot
        as="ul"
        className={clsx(style.roving__tab, className)}
        aria-label={label}
        aria-multiselectable="false"
        role="tree"
      >
        {children}
      </RovingTabindexRoot>
    </TreeViewContext.Provider>
  );
}

export type TreeNodeType = {
  id: string;
  name: string;
  children?: TreeNodeType[];
  icon?: ReactNode;
};

type IconProps = { open?: boolean; className?: string };

export function Arrow({ open, className }: IconProps) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={clsx(className)}
      animate={{ rotate: open ? 90 : 0 }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 4.5l7.5 7.5-7.5 7.5"
      />
    </motion.svg>
  );
}

type NodeProps = {
  node: TreeNodeType;
};

export const Node = function TreeNode({
  node: { id, children, name },
}: NodeProps) {
  const { open, dispatch, selectId, selectedId } = useContext(TreeViewContext);
  const { isFocusable, getRovingProps, getOrderedItems } =
    useRovingTabindex(id);
  const isOpen = open.get(id);
  return (
    <li
      {...getRovingProps<"li">({
        className: style.inner__item,
        onKeyDown: function (e: KeyboardEvent) {
          e.stopPropagation();

          const items = getOrderedItems();
          let nextItemToFocus: RovingTabindexItem | undefined;

          if (isHotkey("up", e)) {
            e.preventDefault();
            nextItemToFocus = getPrevFocusableId(items, id);
          } else if (isHotkey("down", e)) {
            e.preventDefault();
            nextItemToFocus = getNextFocusableId(items, id);
          } else if (isHotkey("left", e)) {
            if (isOpen && children?.length) {
              dispatch({
                type: TreeViewActionTypes.CLOSE,
                id,
              });
            } else {
              nextItemToFocus = getParentFocusableId(items, id);
            }
          } else if (isHotkey("right", e)) {
            if (isOpen && children?.length) {
              nextItemToFocus = getNextFocusableId(items, id);
            } else {
              dispatch({ type: TreeViewActionTypes.OPEN, id });
            }
          } else if (isHotkey("home", e)) {
            e.preventDefault();
            nextItemToFocus = getFirstFocusableId(items);
          } else if (isHotkey("end", e)) {
            e.preventDefault();
            nextItemToFocus = getLastFocusableId(items);
          } else if (/^[a-z]$/i.test(e.key)) {
            nextItemToFocus = getNextFocusableIdByTypeahead(items, id, e.key);
          } else if (isHotkey("space", e)) {
            e.preventDefault();
            selectId(id);
          }
          nextItemToFocus?.element.focus();
        },
        ["aria-expanded"]: children?.length ? Boolean(isOpen) : undefined,
        ["aria-selected"]: selectedId === id,
        role: "treeitem",
      })}
    >
      <MotionConfig
        transition={{
          ease: [0.164, 0.84, 0.43, 1],
          duration: 0.25,
        }}
      >
        <div
          className={clsx(style.box)}
          onClick={() => {
            isOpen
              ? dispatch({
                  id: id,
                  type: TreeViewActionTypes.CLOSE,
                })
              : dispatch({
                  id: id,
                  type: TreeViewActionTypes.OPEN,
                });
            selectId(id);
          }}
        >
          {children?.length ? (
            <Arrow className={style.arrow} open={isOpen} />
          ) : (
            <span className={style.arrow} />
          )}
          <span className={style.name}>{name}</span>
        </div>
        <AnimatePresence initial={false}>
          {children?.length && isOpen && (
            <motion.ul
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: "auto",
                opacity: 1,
                transition: {
                  height: {
                    duration: 0.25,
                  },
                  opacity: {
                    duration: 0.2,
                    delay: 0.05,
                  },
                },
              }}
              exit={{
                height: 0,
                opacity: 0,
                transition: {
                  height: {
                    duration: 0.25,
                  },
                  opacity: {
                    duration: 0.2,
                  },
                },
              }}
              key={"ul"}
              role="group"
              className="pl-4 relative"
            >
              {children.map((node) => (
                <Node node={node} key={node.id} />
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </MotionConfig>
    </li>
  );
};

export const Treeview = { Root, Node };
