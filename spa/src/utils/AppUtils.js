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
    },
  ];
};
