"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const network_helpers_1 = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const chai_1 = require("chai");
const hardhat_1 = require("hardhat");
describe("Poseidon", async () => {
    async function deployPoseidonTest() {
        const [owner] = await hardhat_1.ethers.getSigners();
        const Poseidon = await hardhat_1.ethers.getContractFactory("Poseidon");
        const poseidon = await Poseidon.deploy();
        const PoseidonTest = await hardhat_1.ethers.getContractFactory("PoseidonTest", {
            signer: owner,
            libraries: { Poseidon: await poseidon.getAddress() },
        });
        const poseidon_test = await PoseidonTest.deploy();
        return { poseidon, poseidon_test };
    }
    it("permute", async () => {
        const { poseidon_test } = await (0, network_helpers_1.loadFixture)(deployPoseidonTest);
        const ret = await poseidon_test.testPoseidonPermute(1n << 64n, 1n, 2n);
        (0, chai_1.expect)(ret[0]).equals(0x0f3d15763488ee42a7995f914606316b220856307120ed2a7e769a4073523f39n);
        (0, chai_1.expect)(ret[1]).equals(0x1358c1b20a259a7fdf671ead44f5beaad3cf93e1dcdcccbf0bf79cb73ed1a690n);
        (0, chai_1.expect)(ret[2]).equals(0x1e735a518eea916e578f2b40f2f8fe343f52dcb4841f8b06ce311d3cba203f13n);
    });
    it("poseidon_hash_2", async () => {
        // INPUT: [
        //   0x0000000000000000000000000000000000000000000000000000000000000001,
        //   0x0000000000000000000000000000000000000000000000000000000000000002
        // ]
        // OUPUT:
        //   0x305df2f9f9f1c0b591427aa9fd8ff8b8b8ad8a16953065fca066cb6a69deff53
        const { poseidon_test } = await (0, network_helpers_1.loadFixture)(deployPoseidonTest);
        const [output, gas] = await poseidon_test.testHash([1n, 2n]);
        (0, chai_1.expect)(output).equals(0x305df2f9f9f1c0b591427aa9fd8ff8b8b8ad8a16953065fca066cb6a69deff53n);
        console.log("poseidon_test_2: " + gas + " gas");
    });
    it("poseidon_hash_3", async () => {
        // INPUT: [
        //   0x0000000000000000000000000000000000000000000000000000000000000001,
        //   0x0000000000000000000000000000000000000000000000000000000000000002,
        //   0x0000000000000000000000000000000000000000000000000000000000000003
        // ]
        // OUPUT:
        //   0x1e771e80490bde52a453e40889e14665d5396a81ff3076ac798ce39ef71b6cf1
        const { poseidon_test } = await (0, network_helpers_1.loadFixture)(deployPoseidonTest);
        const [output, gas] = await poseidon_test.testHash([1n, 2n, 3n]);
        (0, chai_1.expect)(output).equals(0x1e771e80490bde52a453e40889e14665d5396a81ff3076ac798ce39ef71b6cf1n);
        console.log("poseidon_test_3: " + gas + " gas");
    });
    it("poseidon_hash_4", async () => {
        // INPUT: [
        //   0x0000000000000000000000000000000000000000000000000000000000000001,
        //   0x0000000000000000000000000000000000000000000000000000000000000002,
        //   0x0000000000000000000000000000000000000000000000000000000000000003,
        //   0x0000000000000000000000000000000000000000000000000000000000000004
        // ]
        // OUPUT:
        //   0x2da67403b05f5b5501f972e14399e37293611b1c5ece6840340d16a93ee9e902
        const { poseidon_test } = await (0, network_helpers_1.loadFixture)(deployPoseidonTest);
        const [output, gas] = await poseidon_test.testHash([1n, 2n, 3n, 4n]);
        (0, chai_1.expect)(output).equals(0x2da67403b05f5b5501f972e14399e37293611b1c5ece6840340d16a93ee9e902n);
        console.log("poseidon_test_4: " + gas + " gas");
    });
    it("poseidon_hash_vk", async () => {
        // elements generated by
        //    eslint-disable-next-line
        // `circuits::tests::batch_verifier::components::vk_hash::vk_hash_test_vector`
        const { poseidon_test } = await (0, network_helpers_1.loadFixture)(deployPoseidonTest);
        const elements = [
            0x0000000000000000000000000000000000000000006c643b22f599a2be6df2e2n,
            0x0000000000000000000000000000000000000000009d5507949d05dbea33fbb1n,
            0x000000000000000000000000000000000000000000002d4d9aa7e302d9df4174n,
            0x000000000000000000000000000000000000000000230301f076caff004d1926n,
            0x000000000000000000000000000000000000000000ec60209fe345ce89830a19n,
            0x0000000000000000000000000000000000000000000014bedd503c37ceb061d8n,
            0x00000000000000000000000000000000000000000071241e0213bc7fc13db7abn,
            0x000000000000000000000000000000000000000000d6732bf501847dd68bc0e0n,
            0x000000000000000000000000000000000000000000000e187847ad4c798374d0n,
            0x000000000000000000000000000000000000000000f2decaa9794cbc3bf3060cn,
            0x00000000000000000000000000000000000000000085f88877f182d38480a653n,
            0x000000000000000000000000000000000000000000000967032fcbf776d1afc9n,
            0x000000000000000000000000000000000000000000ea05a9d57f06547ad0cec8n,
            0x00000000000000000000000000000000000000000023d24d2f9192f896b7c63en,
            0x000000000000000000000000000000000000000000001739c1b1a457a8c73131n,
            0x0000000000000000000000000000000000000000007a0d379da69a4d112346a7n,
            0x000000000000000000000000000000000000000000e847d93f8c3caafddec46bn,
            0x00000000000000000000000000000000000000000000304cfbd1e08a704a99f5n,
            0x0000000000000000000000000000000000000000005edadd46debd5cd992f6edn,
            0x00000000000000000000000000000000000000000000665e5c4479674322d4f7n,
            0x000000000000000000000000000000000000000000001800deef121f1e76426an,
            0x000000000000000000000000000000000000000000a9e71297e485b7aef312c2n,
            0x000000000000000000000000000000000000000000bfb731fb5d25f1aa493335n,
            0x00000000000000000000000000000000000000000000198e9393920d483a7260n,
            0x00000000000000000000000000000000000000000043d37b4ce6cc0166fa7daan,
            0x00000000000000000000000000000000000000000071808dcb408fe3d1e7690cn,
            0x0000000000000000000000000000000000000000000012c85ea5db8c6deb4aabn,
            0x000000000000000000000000000000000000000000b38ef355acdadcd122975bn,
            0x00000000000000000000000000000000000000000099ad690c3395bc4b313370n,
            0x00000000000000000000000000000000000000000000090689d0585ff075ec9en,
            0x000000000000000000000000000000000000000000dc58a6e0871347563f6b8dn,
            0x000000000000000000000000000000000000000000451a6d49ac9f19d9749957n,
            0x000000000000000000000000000000000000000000000daea74e0dc9a426b7c9n,
            0x0000000000000000000000000000000000000000002577aaba24ae2ee172850dn,
            0x000000000000000000000000000000000000000000c2802a209e6e67172ba8a8n,
            0x0000000000000000000000000000000000000000000004b34aff169a4ac560e1n,
            0x0000000000000000000000000000000000000000008e99e9e71683a0a74e9f5en,
            0x0000000000000000000000000000000000000000008d0470bc3640dd5b9aa705n,
            0x000000000000000000000000000000000000000000001beb83112ccefa9bd7acn,
            0x000000000000000000000000000000000000000000108ba18f15ffa80a3d0238n,
            0x000000000000000000000000000000000000000000088eb6fe94a8969ef4793fn,
            0x0000000000000000000000000000000000000000000016bf73162707a3b2b751n,
            0x0000000000000000000000000000000000000000004089d3955e1eb2b78c83a5n,
            0x000000000000000000000000000000000000000000834a913f3957572b63b90an,
            0x000000000000000000000000000000000000000000002ab449284eb7542fd826n,
            0x000000000000000000000000000000000000000000421fe6be57d58c8c0ee9d4n,
            0x000000000000000000000000000000000000000000847bfdc04c3db8a1aff919n,
            0x00000000000000000000000000000000000000000000297c335de311da7f1805n,
            0x000000000000000000000000000000000000000000660f4efe123ca5f34fb839n,
            0x000000000000000000000000000000000000000000dfa2d9b2b377cb84c1c775n,
            0x0000000000000000000000000000000000000000000027f210de00452fe59fd4n,
            0x000000000000000000000000000000000000000000f2f83b1aeffa5c931ee8e0n,
            0x000000000000000000000000000000000000000000d83c64b74e687d76c8879an,
            0x0000000000000000000000000000000000000000000022976075c152c0b2cce3n,
            0x000000000000000000000000000000000000000000461ddfd2825d92386e56a2n,
            0x0000000000000000000000000000000000000000004345ff63a745d91457d8e9n,
            0x0000000000000000000000000000000000000000000015a72efdff4205a117f5n,
            0x000000000000000000000000000000000000000000d4ec09b9d769e2b0a4af7bn,
            0x000000000000000000000000000000000000000000e90ca316ebba93f51f01fbn,
            0x0000000000000000000000000000000000000000000024fbf38765be8d084d17n,
            0x000000000000000000000000000000000000000000313d01fd0e42da45911797n,
            0x000000000000000000000000000000000000000000b4deddcf10cb2423058d36n,
            0x000000000000000000000000000000000000000000002e8c9c624566964c709bn,
            0x000000000000000000000000000000000000000000378dc71efbdfd940f005dbn,
            0x00000000000000000000000000000000000000000079ce43e48627215f8b7f95n,
            0x00000000000000000000000000000000000000000000268fffdbf69f68c9525cn,
        ];
        (0, chai_1.expect)(elements.length).equals(66);
        const [output, gas] = await poseidon_test.testHash(elements);
        (0, chai_1.expect)(output).equals(0x231cda7a9cfa11fb9f33ad5350156ae788366ed85eba569b48fd1938283b1801n);
        console.log("poseidon_test_vk: " + gas + " gas");
    });
});
//# sourceMappingURL=poseidonTests.js.map