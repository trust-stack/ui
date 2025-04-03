import {TrustGraphNodeType} from "@truststack/schema";

export const renderTrustGraphNodeType = (type: TrustGraphNodeType) => {
  switch (type) {
    case TrustGraphNodeType.DCC:
      return "Conformity Credential";
    case TrustGraphNodeType.DTE:
      return "Traceability Event";
    case TrustGraphNodeType.DPP:
      return "Product Passport";
    default:
      return "Trust Graph Node";
  }
};
