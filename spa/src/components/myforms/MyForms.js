import React, { useState, useEffect } from "react";
import "./MyForms.css";

function MyForms({ email }) {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const responseJSON = [
        {
          FormTitle: "myform",
          FormPublishlink: "https://www.google.com",
          FormFolderURL: "https://www.google.com",
          resultSheetUrl: "https://www.google.com",
        },
      ];

      setForms(responseJSON);
    }

    fetchData();
  }, []);

  return (
    <div className="panel panel-default">
      <div className="panel-body">
        {forms !== undefined &&
          forms.map((form) => (
            <div key={form.FormTitle} className="row">
              <div className="col-xs-12">
                <a href={form.FormFolderURL}>{form.FormPublishlink}</a>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default MyForms;
