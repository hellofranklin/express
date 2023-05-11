export const getGmailUserId = (gmail) => {
  return gmail.split("@")[0];
};

export const getHeaderRows = (title, description) => {
  return [
    {
      Name: "titlepanel",
      Type: "fieldset",
      Label: "",
      Mandatory: "",
      Min: "",
      Max: "",
      Options: "",
      Fieldset: "",
      Value: "",
    },
    {
      Name: "title",
      Type: "plaintext",
      Label: title,
      Mandatory: "",
      Min: "",
      Max: "",
      Options: "",
      Fieldset: "titlepanel",
      Value: "",
    },
    {
      Name: "description",
      Type: "plaintext",
      Label: description,
      Mandatory: "",
      Min: "",
      Max: "",
      Options: "",
      Fieldset: "titlepanel",
      Value: "",
    },
    {
      Name: "datapanel",
      Type: "fieldset",
      Label: "",
      Mandatory: "",
      Min: "",
      Max: "",
      Options: "",
      Fieldset: "",
      Value: "",
    },
  ];
};

export const getFooterRows = () => {
  return [
    {
      Name: "submit",
      Type: "submit",
      Label: "Submit",
      Mandatory: "",
      Min: "",
      Max: "",
      Options: "",
      Fieldset: "",
      Value: "",
    },
  ];
};

export const formJsonToBuilderState = (franklinJson) => {
  const notAllowedEntries = [
    "titlepanel",
    "title",
    "description",
    "datapanel",
    "submit",
  ];
  let updateStatePairs = {};

  const formElements = [];

  let counter = 1;
  for (let i = 0; i < franklinJson.length; ) {
    const elementRow = franklinJson[i];
    if (elementRow.Name === "title") {
      updateStatePairs["formTitle"] = elementRow.Label;
    } else if (elementRow.Name === "description") {
      updateStatePairs["formDesc"] = elementRow.Label;
    }
    if (notAllowedEntries.indexOf(elementRow.Name) === -1) {
      if (
        elementRow.Type === "fieldset" &&
        elementRow.Fieldset === "datapanel"
      ) {
        i++;
        const newField = {
          Id: `${counter++}`,
          Name: "",
          Type: "",
          Label: "",
          Mandatory: elementRow.Mandatory,
          Min: "",
          Max: "",
          Options: [],
          Fieldset: `datapanel`,
          Value: ""
        };
        while (
          i < franklinJson.length &&
          franklinJson[i].Fieldset === elementRow.Name
        ) {
          newField["Name"] = franklinJson[i].Name;
          newField["Label"] = franklinJson[i].Name;
          newField["Type"] = franklinJson[i].Type;
          newField["Options"].push(franklinJson[i].Label);
          i++;
        }
        formElements.push(newField);
      } else {
        const updatedRow = { Id: `${counter++}`, ...elementRow };
        formElements.push(updatedRow);
        i++;
      }
    } else {
      i++;
    }
  }

  updateStatePairs["formElements"] = formElements;
  return updateStatePairs;
};

export const builderStateToFormJson = (builderState, title, description) => {
  let data = builderState.map(({ Id, ...rest }) => {
    rest.Name = rest.Label;
    rest.Options = rest.Options.join(",");
    return rest;
  });

  let updatedData = [];
  let counter = 1;
  for (const element of data) {
    if (element.Type === "radio" || element.Type == "checkbox") {
      const fieldsetField = {
        Name: `Question-${counter}-fieldset`,
        Type: "fieldset",
        Label: element.Label,
        Mandatory: element.Mandatory,
        Min: "",
        Max: "",
        Options: "",
        Fieldset: `datapanel`,
      };
      updatedData.push(fieldsetField);
      for (const option of element.Options) {
        const newField = {
          Name: element.Name,
          Type: element.Type,
          Label: option,
          Mandatory: false,
          Min: "",
          Max: "",
          Options: "",
          Fieldset: `Question-${counter}-fieldset`,
        };
        updatedData.push(newField);
      }
    } else {
      updatedData.push(element);
    }
    counter++;
  }

  const headerRows = getHeaderRows(title, description);
  const footerRows = getFooterRows();
  const helixDefaultJson = headerRows.concat(updatedData).concat(footerRows);

  return helixDefaultJson;
};
