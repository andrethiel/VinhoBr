"use client";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";

export default function MyEditor({ id, editorState, onChange }) {
  return (
    <div>
      <CKEditor
        data={editorState}
        id={id}
        editor={ClassicEditor}
        config={{
          toolbar: [
            "heading",
            "|",
            "bold",
            "italic",
            "link",
            "bulletedList",
            "numberedList",
            "blockQuote",
            "ckfinder",
            "|",
            "imageTextAlternative",
            "imageUpload",
            "imageStyle:full",
            "imageStyle:side",
            "|",
            "mediaEmbed",
            "insertTable",
            "tableColumn",
            "tableRow",
            "mergeTableCells",
            "|",
            "undo",
            "redo",
          ],
        }}
        onChange={onChange}
      />
    </div>
  );
}
