export declare const deploy: Partial<import("cmd-ts/dist/cjs/argparser").Register> & {
    parse(context: import("cmd-ts/dist/cjs/argparser").ParseContext): Promise<import("cmd-ts/dist/cjs/argparser").ParsingResult<{
        endpoint: string;
        keyfile: string;
        password: string;
        instance: string;
        verifier_bin: string;
        owner: string | undefined;
        worker: string | undefined;
        groth16VerifierAddress: string | undefined;
        proofReceiverAddress: string | undefined;
        feeModelAddress: string | undefined;
        feeInWei: string | undefined;
    }>>;
} & import("cmd-ts/dist/cjs/helpdoc").PrintHelp & import("cmd-ts/dist/cjs/helpdoc").ProvidesHelp & import("cmd-ts/dist/cjs/helpdoc").Named & Partial<import("cmd-ts/dist/cjs/helpdoc").Versioned> & import("cmd-ts/dist/cjs/argparser").Register & import("cmd-ts/dist/cjs/runner").Handling<{
    endpoint: string;
    keyfile: string;
    password: string;
    instance: string;
    verifier_bin: string;
    owner: string | undefined;
    worker: string | undefined;
    groth16VerifierAddress: string | undefined;
    proofReceiverAddress: string | undefined;
    feeModelAddress: string | undefined;
    feeInWei: string | undefined;
}, Promise<void>> & {
    run(context: import("cmd-ts/dist/cjs/argparser").ParseContext): Promise<import("cmd-ts/dist/cjs/argparser").ParsingResult<Promise<void>>>;
} & Partial<import("cmd-ts/dist/cjs/helpdoc").Versioned & import("cmd-ts/dist/cjs/helpdoc").Descriptive & import("cmd-ts/dist/cjs/helpdoc").Aliased>;
