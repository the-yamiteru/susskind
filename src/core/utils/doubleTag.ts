import singleTag from "./singleTag";
import propsToString from "./propsToString";
import {Props} from "../types";

const doubleTag = <T>(type: string) =>
    (props?: T & Props) =>
        (...children: string[]) => {
            const length = children.length;

            if(length) {
                let content = "";
                for(let i = 0; i < length; i++) content += children[i];
                return `<${type}${propsToString(props)}>${content}</${type}>`
            }

            else return singleTag(type)(props)();
        };

export default doubleTag;