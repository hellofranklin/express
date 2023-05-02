export const getGmailUserId = (gmail) => {
  return gmail.split("@")[0];
};

export const getHeaderRows = () => {
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
      Label: "Title",
      Mandatory: "",
      Min: "",
      Max: "",
      Options: "",
      Fieldset: "titlepanel",
    },
    {
      Name: "description",
      Type: "plaintext",
      Label: "Description",
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
