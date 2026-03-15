import {test} from '@playwright/test'
import excel from 'exceljs'
import path from 'path'


test("read test data", async () => {
  let book = new excel.Workbook();
  // await book.xlsx.readFile(path.join(__dirname, "../testdata/readexcel.xlsx"));
  await book.xlsx.readFile("C:/Users/devan/OneDrive/Desktop/Cap/playwright/testdata/readexcel.xlsx")
  let sheet =  await book.getWorksheet("readecel");
  //let data =  await sheet?.getRow(1).getCell(1).value;
  for(let r=1;r<=sheet?.actualRowCount;r++){
    for(let c=1;c<=sheet?.actualColumnCount;c++){
      let data =  await sheet?.getRow(r).getCell(c).value;
      console.log(data);
    }
  }
});