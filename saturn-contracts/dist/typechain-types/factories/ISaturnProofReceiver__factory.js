"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ISaturnProofReceiver__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "circuitId",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "bytes32",
                name: "proofId",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "uint64",
                name: "submissionIdx",
                type: "uint64",
            },
            {
                indexed: false,
                internalType: "uint64",
                name: "proofIdx",
                type: "uint64",
            },
            {
                components: [
                    {
                        internalType: "uint256[2]",
                        name: "pA",
                        type: "uint256[2]",
                    },
                    {
                        internalType: "uint256[2][2]",
                        name: "pB",
                        type: "uint256[2][2]",
                    },
                    {
                        internalType: "uint256[2]",
                        name: "pC",
                        type: "uint256[2]",
                    },
                ],
                indexed: false,
                internalType: "struct Proof",
                name: "proof",
                type: "tuple",
            },
            {
                indexed: false,
                internalType: "uint256[]",
                name: "publicInputs",
                type: "uint256[]",
            },
        ],
        name: "ProofSubmitted",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "circuitId",
                type: "uint256",
            },
            {
                components: [
                    {
                        internalType: "uint256[2]",
                        name: "alpha",
                        type: "uint256[2]",
                    },
                    {
                        internalType: "uint256[2][2]",
                        name: "beta",
                        type: "uint256[2][2]",
                    },
                    {
                        internalType: "uint256[2][2]",
                        name: "gamma",
                        type: "uint256[2][2]",
                    },
                    {
                        internalType: "uint256[2][2]",
                        name: "delta",
                        type: "uint256[2][2]",
                    },
                    {
                        internalType: "uint256[2][]",
                        name: "s",
                        type: "uint256[2][]",
                    },
                ],
                indexed: false,
                internalType: "struct VK",
                name: "vk",
                type: "tuple",
            },
        ],
        name: "VKRegistered",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "uint16",
                name: "numProofs",
                type: "uint16",
            },
        ],
        name: "estimateFee",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "maxNumProofsPerSubmission",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "uint256[2]",
                        name: "alpha",
                        type: "uint256[2]",
                    },
                    {
                        internalType: "uint256[2][2]",
                        name: "beta",
                        type: "uint256[2][2]",
                    },
                    {
                        internalType: "uint256[2][2]",
                        name: "gamma",
                        type: "uint256[2][2]",
                    },
                    {
                        internalType: "uint256[2][2]",
                        name: "delta",
                        type: "uint256[2][2]",
                    },
                    {
                        internalType: "uint256[2][]",
                        name: "s",
                        type: "uint256[2][]",
                    },
                ],
                internalType: "struct VK",
                name: "vk",
                type: "tuple",
            },
        ],
        name: "registerVK",
        outputs: [
            {
                internalType: "uint256",
                name: "circuitId",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256[]",
                name: "circuitIds",
                type: "uint256[]",
            },
            {
                components: [
                    {
                        internalType: "uint256[2]",
                        name: "pA",
                        type: "uint256[2]",
                    },
                    {
                        internalType: "uint256[2][2]",
                        name: "pB",
                        type: "uint256[2][2]",
                    },
                    {
                        internalType: "uint256[2]",
                        name: "pC",
                        type: "uint256[2]",
                    },
                ],
                internalType: "struct Proof[]",
                name: "proofs",
                type: "tuple[]",
            },
            {
                internalType: "uint256[][]",
                name: "publicInputs",
                type: "uint256[][]",
            },
        ],
        name: "submit",
        outputs: [
            {
                internalType: "bytes32",
                name: "submissionId",
                type: "bytes32",
            },
        ],
        stateMutability: "payable",
        type: "function",
    },
];
class ISaturnProofReceiver__factory {
    static createInterface() {
        return new ethers_1.Interface(_abi);
    }
    static connect(address, runner) {
        return new ethers_1.Contract(address, _abi, runner);
    }
}
exports.ISaturnProofReceiver__factory = ISaturnProofReceiver__factory;
ISaturnProofReceiver__factory.abi = _abi;
//# sourceMappingURL=ISaturnProofReceiver__factory.js.map