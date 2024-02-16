// add the game address here and update the contract name if necessary
const gameAddr = "0x8A791620dd6260079BF849Dc5567aDC3F2FdC318";
const contractName = "Game4";

async function main() {
    // attach to the game
    const game = await hre.ethers.getContractAt(contractName, gameAddr);

    // do whatever you need to do to win the game here:
    const tx1 = await game.win(56);
    /* this one has no decimals or negative numbers just 0 - something depending on the size of the uint
    normally it would cause an overflow or underflow if you exceed the min and max value of the uint
    but by using unchecked{}
    instead of undeflowing or oveflowing, the count will just reset to 0 if 
    oveflow and to the max value if underflow and continue from there until the value is exhausted 
    uint8 has a range of 0-255
    the example has 210 and 56 as the values
    210 + 45 = 255
    if i add 1 more it will overflow and become 0
    210 + 46 = 0
    now the value is 56 so there's still a missing 10 points
    210 + 46 = 0 + 10 = 10
    10 - 11 will be 255 in this case too */

    // await tx1.wait(); // for the transaction to be included in the block before going to the next line
    
    // did you win? Check the transaction receipt!
    // if you did, it will be in both the logs and events array
    const receipt = await tx1.wait();
    console.log(receipt);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
