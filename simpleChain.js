const SHA256=require('crypto-js/sha256');
class Block{
  constructor(data){
    this.hash="";
    this.height=0;
    this.body=data;
    this.timestamp=0;
    this.previousblockhash=0;
  }
}
class Blockchain{
  constructor(){
    this.chain=[];
    this.addBlock(this.createGenesisBlock());
  }
  createGenesisBlock(){
    let firstBlock= new Block('Genesis Block');
    return firstBlock;
  }
  addBlock(newBlock){
    newBlock.height=this.chain.length;
    newBlock.timestamp=new Date().getTime().toString().slice(0,-3);
    if(this.chain.length>0){
      newBlock.previousblockhash=this.chain[this.chain.length-1].hash;
    }
    newBlock.hash=SHA256(JSON.stringify(newBlock)).toString();
    this.chain.push(newBlock);
  }
}
