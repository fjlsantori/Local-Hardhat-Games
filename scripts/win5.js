// add the game address here and update the contract name if necessary
const gameAddr = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
const contractName = "Game5";

async function main() {
    // attach to the game
    const game = await hre.ethers.getContractAt(contractName, gameAddr);

    // do whatever you need to do to win the game here:
    const fill1 = await game.giveMeAllowance(53433);
    await fill1.wait();
    const tx2 = await game.mint(12300);
    await tx2.wait();
    
    // did you win? Check the transaction receipt!
    // if you did, it will be in both the logs and events array
    const tx1 = await game.win();
    const receipt = await tx1.wait();

    console.log(receipt);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
