const OpenMindToken = artifacts.require("OpenMindToken");

contract("OpenMindToken", (accounts) => {
  it("should deploy the contract with the correct initial supply", async () => {
    const name = "OpenMind Token";
    const symbol = "OMD";
    const initialSupply = 10000;

    const token = await OpenMindToken.new(name, symbol, initialSupply);

    const totalSupply = await token.totalSupply();
    assert.equal(totalSupply, initialSupply * 10**18, "Incorrect initial supply");
  });

  it("should not allow creation with an initial supply of 0", async () => {
    const name = "OpenMind Token";
    const symbol = "OMD";
    const initialSupply = 0;

    try {
      await OpenMindToken.new(name, symbol, initialSupply);
      assert.fail("Contract creation with zero initial supply should fail");
    } catch (error) {
      assert.include(error.message, "Initial supply has to be greater than 0", "Unexpected error message");
    }
  });
});
