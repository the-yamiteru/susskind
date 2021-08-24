import {SingleTag} from "./singleTag";
import propsToString from "../help/propsToString";
import renderChildren from "../help/renderChildren";
import {Children, Attributes, Maybe} from "../../types/common";

export const DoubleTag = <A>(type: string) =>
    (props?: Maybe<A & Attributes>, children?: Children) =>
        children?.length
            ? `<${type}${propsToString(props)}>${renderChildren(children)}</${type}>`
            : SingleTag(type)(props);