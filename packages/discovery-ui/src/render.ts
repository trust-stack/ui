import {TrustGraphNodeType} from "@truststack/schema";

export const renderTrustGraphNodeType = (type: TrustGraphNodeType) => {
  switch (type) {
    case "DCC":
      return "Conformity Credential";
    case "DTE":
      return "Traceability Event";
    case "DPP":
      return "Product Passport";
    default:
      return "Trust Graph Node";
  }
};
