// import { useState } from "react";
// import Link from "next/link";
// import dynamic from "next/dynamic";
// import "suneditor/dist/css/suneditor.min.css";

// const SunEditor = dynamic(() => import("suneditor-react"), {
//   ssr: false
// });

// export default function IndexPage() {
//   const [content, setContent] = useState("");

//   return (
//     <div>
//       <SunEditor
//         name="content"
//         defaultValue={content}
//         onChange={(text) => setContent(text)}
//         setOptions={{
//           height: 200,
//           buttonList: [
//             [
//               "formatBlock",
//               "font",
//               "fontSize",
//               "fontColor",
//               "align",
//               "paragraphStyle",
//               "blockquote"
//             ],
//             [
//               "bold",
//               "underline",
//               "italic",
//               "strike",
//               "subscript",
//               "superscript"
//             ],
//             ["removeFormat"],
//             ["outdent", "indent"],
//             ["table", "list"],
//             ["link", "image", "video"]
//           ]
//         }}
//       />
//     </div>
//   );
// }
