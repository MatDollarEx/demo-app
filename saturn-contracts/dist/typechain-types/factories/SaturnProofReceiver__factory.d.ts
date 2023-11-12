import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, AddressLike, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../common";
import type { SaturnProofReceiver, SaturnProofReceiverInterface } from "../SaturnProofReceiver";
type SaturnProofReceiverConstructorParams = [linkLibraryAddresses: SaturnProofReceiverLibraryAddresses, signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SaturnProofReceiver__factory extends ContractFactory {
    constructor(...args: SaturnProofReceiverConstructorParams);
    static linkBytecode(linkLibraryAddresses: SaturnProofReceiverLibraryAddresses): string;
    getDeployTransaction(owner: AddressLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(owner: AddressLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<SaturnProofReceiver & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): SaturnProofReceiver__factory;
    static readonly bytecode = "0x60803461008f57601f61232f38819003918201601f19168301916001600160401b038311848410176100945780849260209460405283398101031261008f57516001600160a01b0381169081900361008f57600480546001600160a01b031916919091179055600380546001600160801b0319166801000000000000000117905560405161228490816100ab8239f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe60806040526004361015610013575b600080fd5b60003560e01c8063031ba7d61461023a5780630a2c16ee146102315780630c15fc8d146102285780630cb836ed1461021f57806314c9794214610216578063207bae8a1461020d5780632f1a59a11461020457806334d2d09c146101fb5780633ead7904146101f2578063405ef347146101e9578063553f78e6146101e05780635764dff81461017d5780635eb21b60146101d7578063635f5fb0146101ce578063756dd3a4146101c55780637ee5285e146101bc5780639016abb1146101b3578063912eea82146101aa578063a5a9504e146101a1578063aa464cfc14610198578063b200385b1461018f578063b2bdfa7b14610186578063c92db29c1461017d578063caf78fc414610174578063cb3756f11461016b578063cccb79e514610162578063d3b3a1a9146101595763fb8bb1f71461015157600080fd5b61000e610307565b5061000e610eb5565b5061000e610e5f565b5061000e610e43565b5061000e610df7565b5061000e610781565b5061000e610dcd565b5061000e610d32565b5061000e610cd3565b5061000e610c5a565b5061000e610b54565b5061000e610b2a565b5061000e610af1565b5061000e6107f5565b5061000e6107ca565b5061000e61079e565b5061000e610743565b5061000e6106b7565b5061000e6105a7565b5061000e6104dc565b5061000e61048b565b5061000e6103d8565b5061000e610391565b5061000e61032f565b5061000e610307565b5061000e6102cb565b5061000e610282565b50634e487b7160e01b600052603260045260246000fd5b600054811015610275575b6000805260206000200190600090565b61027d610243565b610265565b503461000e57602036600319011261000e5760043560009081548110156102b55760208280829452200154604051908152f35b5080fd5b602090600319011261000e5760043590565b503461000e576102da366102b9565b6000526002602052604060018160002001548151906001600160401b03908181168352831c166020820152f35b503461000e57600036600319011261000e5760206001600160401b0360035416604051908152f35b503461000e57602036600319011261000e57606061034e6004356118fc565b9060405192835260208301526040820152f35b9181601f8401121561000e578235916001600160401b03831161000e576020808501948460051b01011161000e57565b503461000e57604036600319011261000e576024356001600160401b03811161000e576103d06103c76020923690600401610361565b90600435611fbc565b604051908152f35b503461000e57602036600319011261000e5760043561ffff811680910361000e5760055460405163103dd74560e11b8152600481019290925261044c9190602090829060249082906001600160a01b03165afa90811561047e575b600091610450575b506040519081529081906020820190565b0390f35b610471915060203d8111610477575b610469818361095b565b8101906112f0565b3861043b565b503d61045f565b61048661133a565b610433565b503461000e57602036600319011261000e576004356001600160401b03811161000e5760206104bf81923690600401610361565b6104c881611267565b9060051b9283910191823720604051908152f35b503461000e576000806003193601126105725760405180918054908183526020809301809282805284832090835b81811061055e575050508461052091038561095b565b60405193838594850191818652518092526040850193925b82811061054757505050500390f35b835185528695509381019392810192600101610538565b82548452928601926001928301920161050a565b80fd5b6003199060208183011261000e57600435916001600160401b03831161000e57826101e09203011261000e5760040190565b503461000e5760206103d06105bb36610575565b611347565b6000915b600283106105d157505050565b6001908251815260208091019201920191906105c4565b906000905b600282106105fa57505050565b602060408261060c60019487516105c0565b019301910190916105ed565b90602080835261020083019061063181850184516105c0565b6106428184015160608601906105e8565b80610220608060409561065c8782015160e08a01906105e8565b61066f60608201516101608a01906105e8565b0151956101e0808201528651809552019401926000905b83821061069557505050505090565b90919293948382826106aa6001948a516105c0565b0196019493920190610686565b503461000e57602036600319011261000e5761044c60406060608082516106dd81610918565b83516106e881610940565b8436823781526106f6611ef6565b6020820152610703611ef6565b8482015261070f611ef6565b83820152015260043560005260016020526107388160002061073381541515611f31565b610a44565b905191829182610618565b503461000e57610752366102b9565b60005260026020526040600181600020015461ffff8251916001600160401b038116835260801c166020820152f35b503461000e57600036600319011261000e57602060405160058152f35b503461000e5760406107af366102b9565b81516001600160801b038216815260809190911c6020820152f35b503461000e57600036600319011261000e5760206003546001600160401b036040519160401c168152f35b503461000e5761044c6080610809366102b9565b6040918291825161081981610918565b6000928184809352826020820152828682015282606082015201528152600260205220906108b66108af6108a3600184519561085487610918565b80548752015461089660ff60208801926001600160401b03808216855281891c16888a015261ffff8160801c1660608a015260901c16608088019060ff169052565b516001600160401b031690565b6001600160401b031690565b1515611f71565b5191829182919091608060ff8160a0840195805185526001600160401b03806020830151166020870152604082015116604086015261ffff6060820151166060860152015116910152565b50634e487b7160e01b600052604160045260246000fd5b60a081019081106001600160401b0382111761093357604052565b61093b610901565b604052565b604081019081106001600160401b0382111761093357604052565b90601f801991011681019081106001600160401b0382111761093357604052565b60405191906000835b6002821061099b5750505061099982610940565b565b6001602081928554815201930191019091610985565b6040519061099982610918565b9060405190604082018281106001600160401b03821117610a11575b6040526000825b60029081831015610a09579060206001926109fb8861097c565b8152019501910190936109e1565b505050909150565b610a19610901565b6109da565b6020906001600160401b038111610a37575b60051b0190565b610a3f610901565b610a30565b9060405191610a5283610918565b82610a5c8261097c565b81526002600e610a6d8285016109be565b9360209485850152610a81600682016109be565b6040850152610a92600a82016109be565b60608501520190815491610aa583610a1e565b94610ab3604051968761095b565b83865260009182528082208187015b858410610ad55750505050505060800152565b8483600192610ae38561097c565b815201920193019290610ac2565b503461000e57602036600319011261000e57600435600052600160205261044c610b1e6040600020610a44565b60405191829182610618565b503461000e57600036600319011261000e576005546040516001600160a01b039091168152602090f35b503461000e57610b6336610575565b610b6c81611347565b610baa81610b8f600054600160401b811015610c4d575b6001810160005561025a565b90919082549060031b600019811b9283911b16911916179055565b80600052600160205260406000208054610c10577fbf09d7c0f7b3a1c9d2c48cfc0da8bab805171c930ac1eb04122ab5c3e48d40dc610bfd84610bf161044c968695611039565b604051918291826111be565b0390a26040519081529081906020820190565b60405162461bcd60e51b81526020600482015260156024820152741592c8185b1c9958591e481c9959da5cdd195c9959605a1b6044820152606490fd5b610c55610901565b610b83565b503461000e57602036600319011261000e576004356001600160a01b038181169182900361000e57600454163303610ca257600580546001600160a01b031916919091179055005b60405162461bcd60e51b815260206004820152600960248201526837b7363ca7bbb732b960b91b6044820152606490fd5b503461000e57610ce2366102b9565b600052600260205260a0604060002060ff600182549201546040519283526001600160401b0380821660208501528160401c16604084015261ffff8160801c16606084015260901c166080820152f35b50606036600319011261000e576001600160401b0360043581811161000e57610d5f903690600401610361565b909160243581811161000e573660238201121561000e57806004013582811161000e573660248260081b8401011161000e5760443592831161000e5761044c94610dbd94610db36024953690600401610361565b9590940191611a62565b6040519081529081906020820190565b503461000e57600036600319011261000e576004546040516001600160a01b039091168152602090f35b503461000e57610e06366102b9565b6000526002602052606060016040600020015460ff604051916001600160401b038116835261ffff8160801c16602084015260901c166040820152f35b503461000e57600036600319011261000e576020604051818152f35b503461000e57610e6e366102b9565b6000526002602052608060016040600020015460ff604051916001600160401b0380821684528160401c16602084015261ffff81851c16604084015260901c166060820152f35b503461000e57610ec4366102b9565b60005260026020526001600160401b03600160406000200154168015610eef57602090604051908152f35b606460405162461bcd60e51b815260206004820152602060248201527f4e6f207375626d697373696f6e20286765745375626d697373696f6e496478296044820152fd5b50634e487b7160e01b600052601160045260246000fd5b908160011b9180830460021490151715610f6057565b610999610f33565b90600382029180830460031490151715610f6057565b9060005b60028110610f8f57505050565b600190602083359301928185015501610f82565b818110610fae575050565b60028101815b818110610fc5575050600201610fa3565b60008155600101610fb4565b916000915b60029081841015610ffd5790604082610ff160019488610f7e565b01940192019192610fd6565b5050915050565b903590601e198136030182121561000e57018035906001600160401b03821161000e57602001918160061b3603831361000e57565b908060005b6002811061114f575050906110bb916040611093600e600294611065848601878301610fd1565b61107560c0860160068301610fd1565b6110866101408601600a8301610fd1565b01926101c0810190611004565b9490600160401b8611611142575b83548685558087106110e9575b5092600052602060002090565b6000925b8584106110ce57505050505050565b8483826110dd60019486610f7e565b019201930192906110bf565b611122906001600160ff1b038082168203611135575b88168803611128575b8560005260206000209060011b8101908860011b01610fa3565b386110ae565b611130610f33565b611108565b61113d610f33565b6110ff565b61114a610901565b6110a1565b60019060208335930192818601550161103e565b6000915b6002831061117457505050565b600190604081818581943701920192019190611167565b9160209082815201919060005b8181106111a55750505090565b9091926001906040818187819437019401929101611198565b906020825260408160208401376111db6060830160408301611163565b6111eb60e0830160c08301611163565b6111fd61016083016101408301611163565b6101c0810135601e198236030181121561000e5701602081359101906001600160401b03811161000e578060061b3603821361000e57610200611248936101e080820152019161118b565b90565b600a019081600a11610f6057565b9060038201809211610f6057565b9061127182610a1e565b61127e604051918261095b565b828152809261128f601f1991610a1e565b0190602036910137565b60019060001981146112a9570190565b6112b1610f33565b0190565b91908110156112c6575b60061b0190565b6112ce610243565b6112bf565b156112da57565b634e487b7160e01b600052600160045260246000fd5b9081602091031261000e575190565b6020908160408183019282815285518094520193019160005b828110611326575050505090565b835185529381019392810192600101611318565b506040513d6000823e3d90fd5b6101c081016113568183611004565b92905061137261136d61136885610f4a565b61124b565b610f68565b9061137c82611267565b9361138885833561152c565b61139685602084013561158a565b6113a48560408401356115df565b6113b2856060840135611636565b6113c085608084013561168e565b6113ce8560a08401356116e6565b6113dd8561014084013561173e565b6113ec85610160840135611796565b6113fb856101808401356117ee565b61140a856101a0840135611846565b601e936000925b82841061149857505050509161142d60209261144794146112d3565b604051809381926340ec6e4960e01b8352600483016112ff565b038173__$5f8d1571992d2f3bcd28d5b37c5414edb7$__5af490811561148b575b600091611473575090565b611248915060203d811161047757610469818361095b565b61149361133a565b611468565b909192946114e66114ca826114c56114ec948b6114bf8c6114b98b8b611004565b906112b5565b3561189e565b611259565b6114c5818a6114bf6114e08c6114b98b8b611004565b60200190565b95611299565b929190611411565b602090805115611502570190565b6112b1610243565b602091815181101561151f575b60051b010190565b611527610243565b611517565b6115376060916118fc565b939182511561157d575b6020830152815160011015611570575b6040820152805160021015611564570152565b61156c610243565b0152565b611578610243565b611551565b611585610243565b611541565b61159560c0916118fc565b93918251600310156115d2575b60808301528151600410156115c5575b60a0820152805160051015611564570152565b6115cd610243565b6115b2565b6115da610243565b6115a2565b6115eb610120916118fc565b9391825160061015611629575b60e083015281516007101561161c575b610100820152805160081015611564570152565b611624610243565b611608565b611631610243565b6115f8565b611642610180916118fc565b9391825160091015611681575b6101408301528151600a1015611674575b6101608201528051600b1015611564570152565b61167c610243565b611660565b611689610243565b61164f565b61169a6101e0916118fc565b93918251600c10156116d9575b6101a08301528151600d10156116cc575b6101c08201528051600e1015611564570152565b6116d4610243565b6116b8565b6116e1610243565b6116a7565b6116f2610240916118fc565b93918251600f1015611731575b610200830152815160101015611724575b610220820152805160111015611564570152565b61172c610243565b611710565b611739610243565b6116ff565b61174a6102a0916118fc565b9391825160121015611789575b61026083015281516013101561177c575b610280820152805160141015611564570152565b611784610243565b611768565b611791610243565b611757565b6117a2610300916118fc565b93918251601510156117e1575b6102c08301528151601610156117d4575b6102e0820152805160171015611564570152565b6117dc610243565b6117c0565b6117e9610243565b6117af565b6117fa610360916118fc565b9391825160181015611839575b61032083015281516019101561182c575b6103408201528051601a1015611564570152565b611834610243565b611818565b611841610243565b611807565b6118526103c0916118fc565b93918251601b1015611891575b6103808301528151601c1015611884575b6103a08201528051601d1015611564570152565b61188c610243565b611870565b611899610243565b61185f565b916118ac6118df92936118fc565b94916118b8848461150a565b526118ce600184018085116118ef575b8361150a565b52600282018092116118e25761150a565b52565b6118ea610f33565b61150a565b6118f7610f33565b6118c8565b6affffffffffffffffffffff91828216928260581c169160b01c90565b1561192057565b60405162461bcd60e51b8152602060048201526017602482015276696e636f6d70617469626c65206e756d2070726f6f667360481b6044820152606490fd5b1561196657565b60405162461bcd60e51b815260206004820152601e60248201527f696e636f6d70617469626c65206e756d207075626c696320696e7075747300006044820152606490fd5b156119b257565b60405162461bcd60e51b815260206004820152600f60248201526e746f6f206d616e792070726f6f667360881b6044820152606490fd5b6001906001600160401b038091169081146112a9570190565b60019061ffff8091169081146112a9570190565b15611a1d57565b60405162461bcd60e51b815260206004820152601a60248201527f7375626d697373696f6e2065786973747320287375626d6974290000000000006044820152606490fd5b9594929593909361ffff9283861693611a7c858a14611919565b611a8785871461195f565b611a9460208611156119ab565b611a9d85611ea1565b9581600160ff89161b1694611aba611ab487611267565b96611267565b9a8b94611acf6003546001600160401b031690565b9a611af8611adc8d6119e9565b6001600160401b03166001600160401b03196003541617600355565b60035460401c6001600160401b0316976000975b8b888a1610611ce157505050505050505050611c4092611c2b611b96611c17611b71611b6b6109999a9997611b66611c3698600354906001600160401b0360401b9060401b16906001600160401b0360401b191617600355565b611dac565b9b611dac565b97611bab8c611ba460016001600160401b039687936000526002602052604060002090565b01546001600160401b031690565b1615611a16565b6005546001600160a01b0316604051633c1a60fd60e01b81523360048201526001600160401b038316602482015260016044820152906020908290606490829034905af18015611cd4575b611cb6575b50611c046109b1565b9889526001600160401b03166020890152565b431660408701906001600160401b03169052565b61ffff166060850152565b60ff166080830152565b611c54846000526002602052604060002090565b6001908251815501906001600160401b03602082015116908254916001600160401b0360401b604083015160401b1690606083015192608060ff60901b91015160901b169360018060981b03191617179061ffff60801b9060801b1617179055565b611ccd9060203d811161047757610469818361095b565b5038611bfb565b611cdc61133a565b611bf6565b611d118a8f611d17938f95969798999a9b9c9d8f908f8c8f928f928c8f92988f9299611d0c9a6120f1565b6119e9565b99611a02565b9796959493929190508e611b0c565b61ffff9081166000190191908211610f6057565b15611d4157565b60405162461bcd60e51b815260206004820152601f60248201527f4e504f54206c65617665732028636f6d707574654d65726b6c65526f6f7429006044820152606490fd5b90600261ffff80931601918211610f6057565b90600161ffff80931601918211610f6057565b90611db9825161ffff1690565b9061ffff91611dd48382611dcc81611d26565b161615611d3a565b8281169060019081831115611e7157811c617fff1691611df383611267565b9560009182845b611e09575b5050505050611dd4565b87811682811015611e6b578591611e4a611e26611e65938761150a565b51611e43611e3d611e3685611d99565b61ffff1690565b8861150a565b5190611e83565b611e5f8b611e5789611a02565b98168d61150a565b52611d86565b90611dfa565b50611dff565b50505091611e7f91506114f4565b5190565b604091825191611e9283610940565b83368437825260208201522090565b6000906001809181925b611eb6575b50505090565b61ffff8082169084161015611ef15761fffe8280949560ff809116908114611ee4575b0194831b1692611eab565b611eec610f33565b611ed9565b611eb0565b6040908151611f0481610940565b809260005b818110611f1557505050565b6020908251611f2381610940565b833682378185015201611f09565b15611f3857565b60405162461bcd60e51b81526020600482015260116024820152701592c81b9bdd081c9959da5cdd195c9959607a1b6044820152606490fd5b15611f7857565b606460405162461bcd60e51b815260206004820152602060248201527f4e6f20737563682070726f6f66286765745375626d697373696f6e44617461296044820152fd5b91604090602092611fd66001830180841161200057611267565b91825115611ff3575b84830195865260051b928392013701902090565b611ffb610243565b611fdf565b612008610f33565b611267565b919081101561201e575b60081b0190565b612026610243565b612017565b9190811015612070575b60051b81013590601e198136030182121561000e5701908135916001600160401b03831161000e576020018260051b3603811361000e579190565b612078610243565b612035565b9060c08060409384818537612096858501868301611163565b01910137565b939492906120c1926001600160401b038092168652166020850152604084019061207d565b610160610140830181905282018190526001600160fb1b03811161000e5760051b90816101809384830137010190565b621fffe0909a9296999a979593919761ffff8116958610156121fd575b60051b16013597886000526001602052604060002054156121b85783809261213782848761200d565b6121409061220a565b9161214a9161150a565b5281612157818a8861202b565b612161918c611fbc565b9a8b9161216d9161150a565b526121779261200d565b946121819261202b565b90604051948594612192948661209c565b037fea8bf22261dd11bda81fe94e8b5742f0b1c502ac6d3fa2ee2605fb695e1b42bc91a3565b60405162461bcd60e51b815260206004820152601a60248201527f564b20686173206e6f74206265656e20726567697374657265640000000000006044820152606490fd5b612205610243565b61210e565b60405161221b60208201809361207d565b610100815261012081018181106001600160401b03821117612241575b60405251902090565b612249610901565b61223856fea2646970667358221220a5d25e2616f581c934f3a33b02ce81848047d8e70d7c58e116477ea6e84a652b64736f6c63430008110033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "circuitId";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "proofId";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint64";
            readonly name: "submissionIdx";
            readonly type: "uint64";
        }, {
            readonly indexed: false;
            readonly internalType: "uint64";
            readonly name: "proofIdx";
            readonly type: "uint64";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256[2]";
                readonly name: "pA";
                readonly type: "uint256[2]";
            }, {
                readonly internalType: "uint256[2][2]";
                readonly name: "pB";
                readonly type: "uint256[2][2]";
            }, {
                readonly internalType: "uint256[2]";
                readonly name: "pC";
                readonly type: "uint256[2]";
            }];
            readonly indexed: false;
            readonly internalType: "struct Proof";
            readonly name: "proof";
            readonly type: "tuple";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256[]";
            readonly name: "publicInputs";
            readonly type: "uint256[]";
        }];
        readonly name: "ProofSubmitted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "circuitId";
            readonly type: "uint256";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256[2]";
                readonly name: "alpha";
                readonly type: "uint256[2]";
            }, {
                readonly internalType: "uint256[2][2]";
                readonly name: "beta";
                readonly type: "uint256[2][2]";
            }, {
                readonly internalType: "uint256[2][2]";
                readonly name: "gamma";
                readonly type: "uint256[2][2]";
            }, {
                readonly internalType: "uint256[2][2]";
                readonly name: "delta";
                readonly type: "uint256[2][2]";
            }, {
                readonly internalType: "uint256[2][]";
                readonly name: "s";
                readonly type: "uint256[2][]";
            }];
            readonly indexed: false;
            readonly internalType: "struct VK";
            readonly name: "vk";
            readonly type: "tuple";
        }];
        readonly name: "VKRegistered";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "MAX_NUM_PROOFS_PER_SUBMISSION";
        readonly outputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "";
            readonly type: "uint16";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "MAX_SUBMISSION_MERKLE_DEPTH";
        readonly outputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "";
            readonly type: "uint16";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "_circuitData";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256[2]";
                readonly name: "alpha";
                readonly type: "uint256[2]";
            }, {
                readonly internalType: "uint256[2][2]";
                readonly name: "beta";
                readonly type: "uint256[2][2]";
            }, {
                readonly internalType: "uint256[2][2]";
                readonly name: "gamma";
                readonly type: "uint256[2][2]";
            }, {
                readonly internalType: "uint256[2][2]";
                readonly name: "delta";
                readonly type: "uint256[2][2]";
            }, {
                readonly internalType: "uint256[2][]";
                readonly name: "s";
                readonly type: "uint256[2][]";
            }];
            readonly internalType: "struct VK";
            readonly name: "verificationKey";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "_circuitIds";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "_feeModel";
        readonly outputs: readonly [{
            readonly internalType: "contract ISaturnFeeModel";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "_nextProofIdx";
        readonly outputs: readonly [{
            readonly internalType: "uint64";
            readonly name: "";
            readonly type: "uint64";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "_nextSubmissionIdx";
        readonly outputs: readonly [{
            readonly internalType: "uint64";
            readonly name: "";
            readonly type: "uint64";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "_owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly name: "_submissions";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "proofDigestRoot";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint64";
            readonly name: "submissionIdx";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint64";
            readonly name: "submissionBlockNumber";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint16";
            readonly name: "numProofs";
            readonly type: "uint16";
        }, {
            readonly internalType: "uint8";
            readonly name: "merkleDepth";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256[2]";
                readonly name: "alpha";
                readonly type: "uint256[2]";
            }, {
                readonly internalType: "uint256[2][2]";
                readonly name: "beta";
                readonly type: "uint256[2][2]";
            }, {
                readonly internalType: "uint256[2][2]";
                readonly name: "gamma";
                readonly type: "uint256[2][2]";
            }, {
                readonly internalType: "uint256[2][2]";
                readonly name: "delta";
                readonly type: "uint256[2][2]";
            }, {
                readonly internalType: "uint256[2][]";
                readonly name: "s";
                readonly type: "uint256[2][]";
            }];
            readonly internalType: "struct VK";
            readonly name: "vk";
            readonly type: "tuple";
        }];
        readonly name: "computeCircuitId";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32[]";
            readonly name: "proofIDs";
            readonly type: "bytes32[]";
        }];
        readonly name: "computeFinalDigest";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "finalDigest";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "circuitId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "publicInputs";
            readonly type: "uint256[]";
        }];
        readonly name: "computeProofId";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "fq";
            readonly type: "uint256";
        }];
        readonly name: "decomposeFq";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "digest";
            readonly type: "bytes32";
        }];
        readonly name: "digestAsFieldElements";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "numProofs";
            readonly type: "uint16";
        }];
        readonly name: "estimateFee";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getCircuitIds";
        readonly outputs: readonly [{
            readonly internalType: "uint256[]";
            readonly name: "";
            readonly type: "uint256[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "submissionId";
            readonly type: "bytes32";
        }];
        readonly name: "getSubmission";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "proofDigestRoot";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint64";
                readonly name: "submissionIdx";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "submissionBlockNumber";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint16";
                readonly name: "numProofs";
                readonly type: "uint16";
            }, {
                readonly internalType: "uint8";
                readonly name: "merkleDepth";
                readonly type: "uint8";
            }];
            readonly internalType: "struct SaturnProofReceiver.Submission";
            readonly name: "submission";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "submissionId";
            readonly type: "bytes32";
        }];
        readonly name: "getSubmissionIdx";
        readonly outputs: readonly [{
            readonly internalType: "uint64";
            readonly name: "submissionIdx";
            readonly type: "uint64";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "submissionId";
            readonly type: "bytes32";
        }];
        readonly name: "getSubmissionIdxAndHeight";
        readonly outputs: readonly [{
            readonly internalType: "uint64";
            readonly name: "submissionIdx";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint64";
            readonly name: "submissionBlockNumber";
            readonly type: "uint64";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "submissionId";
            readonly type: "bytes32";
        }];
        readonly name: "getSubmissionIdxAndNumProofs";
        readonly outputs: readonly [{
            readonly internalType: "uint64";
            readonly name: "submissionIdx";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint16";
            readonly name: "numProofs";
            readonly type: "uint16";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "submissionId";
            readonly type: "bytes32";
        }];
        readonly name: "getSubmissionIdxHeightNumProofsDepth";
        readonly outputs: readonly [{
            readonly internalType: "uint64";
            readonly name: "submissionIdx";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint64";
            readonly name: "height";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint16";
            readonly name: "numProofs";
            readonly type: "uint16";
        }, {
            readonly internalType: "uint8";
            readonly name: "depth";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "submissionId";
            readonly type: "bytes32";
        }];
        readonly name: "getSubmissionIdxNumProofsDepth";
        readonly outputs: readonly [{
            readonly internalType: "uint64";
            readonly name: "submissionIdx";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint16";
            readonly name: "numProofs";
            readonly type: "uint16";
        }, {
            readonly internalType: "uint8";
            readonly name: "depth";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "circuitId";
            readonly type: "uint256";
        }];
        readonly name: "getVK";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256[2]";
                readonly name: "alpha";
                readonly type: "uint256[2]";
            }, {
                readonly internalType: "uint256[2][2]";
                readonly name: "beta";
                readonly type: "uint256[2][2]";
            }, {
                readonly internalType: "uint256[2][2]";
                readonly name: "gamma";
                readonly type: "uint256[2][2]";
            }, {
                readonly internalType: "uint256[2][2]";
                readonly name: "delta";
                readonly type: "uint256[2][2]";
            }, {
                readonly internalType: "uint256[2][]";
                readonly name: "s";
                readonly type: "uint256[2][]";
            }];
            readonly internalType: "struct VK";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "maxNumProofsPerSubmission";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "nextSubmissionIdx";
        readonly outputs: readonly [{
            readonly internalType: "uint64";
            readonly name: "";
            readonly type: "uint64";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256[2]";
                readonly name: "alpha";
                readonly type: "uint256[2]";
            }, {
                readonly internalType: "uint256[2][2]";
                readonly name: "beta";
                readonly type: "uint256[2][2]";
            }, {
                readonly internalType: "uint256[2][2]";
                readonly name: "gamma";
                readonly type: "uint256[2][2]";
            }, {
                readonly internalType: "uint256[2][2]";
                readonly name: "delta";
                readonly type: "uint256[2][2]";
            }, {
                readonly internalType: "uint256[2][]";
                readonly name: "s";
                readonly type: "uint256[2][]";
            }];
            readonly internalType: "struct VK";
            readonly name: "vk";
            readonly type: "tuple";
        }];
        readonly name: "registerVK";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "circuitId";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "feeModel";
            readonly type: "address";
        }];
        readonly name: "setFeeModel";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256[]";
            readonly name: "circuitIds";
            readonly type: "uint256[]";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256[2]";
                readonly name: "pA";
                readonly type: "uint256[2]";
            }, {
                readonly internalType: "uint256[2][2]";
                readonly name: "pB";
                readonly type: "uint256[2][2]";
            }, {
                readonly internalType: "uint256[2]";
                readonly name: "pC";
                readonly type: "uint256[2]";
            }];
            readonly internalType: "struct Proof[]";
            readonly name: "proofs";
            readonly type: "tuple[]";
        }, {
            readonly internalType: "uint256[][]";
            readonly name: "publicInputs";
            readonly type: "uint256[][]";
        }];
        readonly name: "submit";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "submissionId";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): SaturnProofReceiverInterface;
    static connect(address: string, runner?: ContractRunner | null): SaturnProofReceiver;
}
export interface SaturnProofReceiverLibraryAddresses {
    ["contracts/Poseidon.sol:Poseidon"]: string;
}
export {};
