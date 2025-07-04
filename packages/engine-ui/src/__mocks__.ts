export const mock = {
  header: {
    title: "Harvest Event",
  },
  sections: [
    {
      validationId: "whereWhen",
      title: "Harvest Location and Time",
      items: [
        {
          type: "SUB_HEADER",
          subHeader: "Harvest Location",
          expanded: 12,
          compact: 12,
        },
        {
          validationId: "whereWhen.location",
          type: "SELECT",
          inputLabel: "Paddock",
          select: {
            options: [
              {
                label: "Paddock 1",
                value: "paddock1",
              },
              {
                label: "Paddock 2",
                value: "paddock2",
              },
            ],
          },
          expanded: 12,
          compact: 12,
        },
        {
          type: "SUB_HEADER",
          subHeader: "Event Time",
          expanded: 12,
          compact: 12,
        },
        {
          validationId: "whereWhen.eventTime",
          type: "DATE_TIME_PICKER",
          inputLabel: "Event Time",
          expanded: 12,
          compact: 12,
        },
      ],
    },
    {
      validationId: "what",
      title: "What Was Harvested",
      items: [
        {
          validationId: "what.tradeItem",
          type: "SELECT",
          inputLabel: "Trade Item",
          select: {
            options: [
              {
                label: "Trade Item 1",
                value: "tradeItem1",
              },
              {
                label: "Trade Item 2",
                value: "tradeItem2",
              },
            ],
          },
          expanded: 6,
          compact: 12,
        },
        {
          validationId: "what.quantity",
          type: "INPUT_NUMERICAL",
          inputLabel: "Quantity",
          expanded: 6,
          compact: 12,
        },
      ],
    },
    {
      validationId: "storageDispatch",
      title: "Storage or dispatch",
      items: [
        {
          type: "SUB_HEADER",
          subHeader: "Storing on farm or dispatching?",
          expanded: 12,
          compact: 12,
        },
        {
          validationId: "storageDispatch.option",
          type: "TOGGLE",
          toggle: {
            options: [
              {
                label: "Storing on farm",
                value: "storing",
              },
              {
                label: "Dispatching to trade partner",
                value: "dispatching",
              },
            ],
            conditionalItems: [
              {
                value: "storing",
                items: [
                  {
                    validationId: "storageDispatch.storage",
                    type: "SELECT",
                    inputLabel: "Storage",
                    select: {
                      options: [
                        {
                          label: "Storage 1",
                          value: "storage1",
                        },
                        {
                          label: "Storage 2",
                          value: "storage2",
                        },
                      ],
                    },
                    expanded: 12,
                    compact: 12,
                  },
                ],
              },
              {
                value: "dispatching",
                items: [
                  {
                    validationId: "storageDispatch.partner",
                    type: "SELECT",
                    inputLabel: "Trade Partner",
                    select: {
                      options: [
                        {
                          label: "Trade Partner 1",
                          value: "tradePartner1",
                        },
                        {
                          label: "Trade Partner 2",
                          value: "tradePartner2",
                        },
                      ],
                    },
                    expanded: 12,
                    compact: 12,
                  },
                ],
              },
            ],
          },
          expanded: 12,
          compact: 12,
        },
      ],
    },
  ],
  validation: {
    whereWhen: {
      location: {
        type: "string",
        required: true,
        message: "Location is required",
      },
      eventTime: {
        type: "date",
        required: true,
        message: "Event time is required",
      },
    },
    what: {
      tradeItem: {
        type: "string",
        required: true,
        message: "Trade item is required",
      },
      quantity: {
        type: "number",
        required: true,
        positive: true,
        message: "Quantity must be a positive whole number",
      },
    },
    storageDispatch: {
      option: {
        type: "mixed",
        required: true,
        oneOf: ["storing", "dispatching"],
      },
      storage: {
        type: "string",
        when: {
          field: "option",
          is: "storing",
          then: {
            type: "string",
            required: true,
            message: "Storage is required",
          },
        },
      },
      partner: {
        type: "string",
        when: {
          field: "option",
          is: "dispatching",
          then: {
            type: "string",
            required: true,
            message: "Trade partner is required",
          },
        },
      },
    },
    tags: {
      type: "array",
      of: {
        type: "string",
      },
    },
    metadata: {
      type: "object",
      shape: {
        createdBy: {
          type: "string",
          required: true,
        },
        items: {
          type: "array",
          required: true,
          of: {
            type: "object",
            shape: {
              id: {
                type: "number",
                required: true,
              },
            },
          },
        },
      },
    },
  },
};
