export declare const mock: {
    header: {
        title: string;
    };
    sections: ({
        validationId: string;
        title: string;
        items: ({
            type: string;
            subHeader: string;
            expanded: number;
            compact: number;
            validationId?: undefined;
            inputLabel?: undefined;
            select?: undefined;
        } | {
            validationId: string;
            type: string;
            inputLabel: string;
            select: {
                options: {
                    label: string;
                    value: string;
                }[];
            };
            expanded: number;
            compact: number;
            subHeader?: undefined;
        } | {
            validationId: string;
            type: string;
            inputLabel: string;
            expanded: number;
            compact: number;
            subHeader?: undefined;
            select?: undefined;
        })[];
    } | {
        validationId: string;
        title: string;
        items: ({
            type: string;
            subHeader: string;
            expanded: number;
            compact: number;
            validationId?: undefined;
            toggle?: undefined;
        } | {
            validationId: string;
            type: string;
            toggle: {
                options: {
                    label: string;
                    value: string;
                }[];
                conditionalItems: {
                    value: string;
                    items: {
                        validationId: string;
                        type: string;
                        inputLabel: string;
                        select: {
                            options: {
                                label: string;
                                value: string;
                            }[];
                        };
                        expanded: number;
                        compact: number;
                    }[];
                }[];
            };
            expanded: number;
            compact: number;
            subHeader?: undefined;
        })[];
    })[];
    validation: {
        whereWhen: {
            location: {
                type: string;
                required: boolean;
                message: string;
            };
            eventTime: {
                type: string;
                required: boolean;
                message: string;
            };
        };
        what: {
            tradeItem: {
                type: string;
                required: boolean;
                message: string;
            };
            quantity: {
                type: string;
                required: boolean;
                positive: boolean;
                message: string;
            };
        };
        storageDispatch: {
            option: {
                type: string;
                required: boolean;
                oneOf: string[];
            };
            storage: {
                type: string;
                when: {
                    field: string;
                    is: string;
                    then: {
                        type: string;
                        required: boolean;
                        message: string;
                    };
                };
            };
            partner: {
                type: string;
                when: {
                    field: string;
                    is: string;
                    then: {
                        type: string;
                        required: boolean;
                        message: string;
                    };
                };
            };
        };
        tags: {
            type: string;
            of: {
                type: string;
            };
        };
        metadata: {
            type: string;
            shape: {
                createdBy: {
                    type: string;
                    required: boolean;
                };
                items: {
                    type: string;
                    required: boolean;
                    of: {
                        type: string;
                        shape: {
                            id: {
                                type: string;
                                required: boolean;
                            };
                        };
                    };
                };
            };
        };
    };
};
//# sourceMappingURL=__mocks__.d.ts.map