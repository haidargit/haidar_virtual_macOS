import type { TerminalData } from "../types";

const terminal: TerminalData[] = [
  {
    id: "about",
    title: "about",
    type: "folder",
    children: [
      {
        id: "about-bio",
        title: "bio.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div>
              Hi! Name's Haidar.
            </div>
            {/* <div className="mt-1">
              Before that, I got my bachelor's degree in Informatics Engineering at
              State Polytechnic of Malang.
            </div> */}
          </div>
        )
      },
      {
        id: "about-interests",
        title: "interests.txt",
        type: "file",
        content:
          "I am highly interested in Backend Development, Site Reliability Engineering, Linux, and Cloud Computing, especially AWS."
      },
      {
        id: "about-work",
        title: "work.txt",
        type: "file",
        content:
          "🙂 🗡️ 🗡️"
      },
      {
        id: "about-contact",
        title: "contact.txt",
        type: "file",
        content: (
          <ul className="list-disc ml-6">
            <li>
              Email:{" "}
              <a
                className="text-blue-300"
                href="mailto:haidarali.dev21@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                haidarali.dev21@gmail.com
              </a>{" "}
              {/* /{" "}
              <a
                className="text-blue-300"
                href="mailto:xiaohan.zou@foxmail.com"
                target="_blank"
                rel="noreferrer"
              >
                xiaohan.zou@foxmail.com
              </a> */}
            </li>
            <li>
              Github:{" "}
              <a
                className="text-blue-300"
                href="https://github.com/haidargit"
                target="_blank"
                rel="noreferrer"
              >
                https://github.com/haidargit
              </a>
            </li>
            <li>
              Linkedin:{" "}
              <a
                className="text-blue-300"
                href="https://www.linkedin.com/in/haidar1"
                target="_blank"
                rel="noreferrer"
              >
                https://www.linkedin.com/in/haidar1
              </a>
            </li>
            {/* <li>
              Blog:{" "}
              <a
                className="text-blue-300"
                href="https://zxh.io"
                target="_blank"
                rel="noreferrer"
              >
                https://zxh.io
              </a>
            </li> */}
            {/* <li>
              知乎:{" "}
              <a
                className="text-blue-300"
                href="https://www.zhihu.com/people/chao-neng-gui-su"
                target="_blank"
                rel="noreferrer"
              >
                https://www.zhihu.com/people/chao-neng-gui-su
              </a>
            </li> */}
          </ul>
        )
      }
    ]
  },
  {
    id: "protein",
    title: "NonStopProtein.cs",
    type: "file",
    content: (
      <div className="py-1">
        <div>
        <span className="text-teal-50">using </span>
        <span className="text-fuchsia-200">System;</span><br /><br />
        <span className="text-teal-50">public class NonStopProtein{"{"}</span><br /><br />
        <span className="text-teal-50">&nbsp;&nbsp;public static void Main(){"{"}</span><br /><br />
        <span className="text-yellow-400">&nbsp;&nbsp;&nbsp;&nbsp;double </span>
        <span className="text-blue-400">haidarsWeight = </span>
        <span className="text-yellow-400">55.15;</span><br/>
        <span className="text-yellow-400">&nbsp;&nbsp;&nbsp;&nbsp;bool</span>
        <span className="text-blue-400"> eat = </span>
        <span className="text-yellow-400">true;</span>
        </div>
        <div>
          <span className="text-yellow-400"><br/>&nbsp;&nbsp;&nbsp;&nbsp;while</span>(
          <span className="text-blue-400">eat</span>) <span>{"{"}</span>
        </div>
        <div>
          <span className="text-blue-400 ml-9">&nbsp;&nbsp;haidarsWeight</span>
          <span className="text-yellow-400">++;</span>
        </div>
        <div>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;{"}"}</span>
        </div>
        <div>
        <span>&nbsp;&nbsp;{"}"}</span>
        </div>
        <div>
        <span>{"}"}</span>
        </div>
      </div>
    )
  }
];

export default terminal;
