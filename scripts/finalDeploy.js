const hre = require("hardhat");

async function main() {
  const chai = await hre.ethers.deployContract("chai");
  const contract = await chai.waitForDeployment();
  console.log("Address of contract:", contract.target);
}
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });