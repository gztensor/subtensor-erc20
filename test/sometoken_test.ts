import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("SomeToken", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployToken() {
    const SomeToken = await ethers.getContractFactory("SomeToken");
    const someToken = await SomeToken.deploy();

    return someToken;
  }

  describe("Deployment", function () {
    it("Should deploy contract with correct decimals", async function () {
      const omnToken = await loadFixture(deployToken);
      expect(await omnToken.decimals()).to.equal(18);
    });

    it("Should deploy contract with correct symbol", async function () {
      const omnToken = await loadFixture(deployToken);
      expect(await omnToken.symbol()).to.equal("Some");
    });

    it("Should deploy contract with correct name", async function () {
      const omnToken = await loadFixture(deployToken);
      expect(await omnToken.name()).to.equal("Example Token");
    });

    it("Should deploy contract with correct initial supply", async function () {
      const omnToken = await loadFixture(deployToken);
      expect(await omnToken.totalSupply()).to.equal(500_000_000_000_000_000_000_000n);
    });
  });
});
