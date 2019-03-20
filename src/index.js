module.exports = function solveSudoku(matrix) 
{
  
  
  function solver(table, n)
  {
    let row; 
    let column; 
    let isEmpty = true; 
    for (let i = 0; i < n; i++) 
    { 
        for (let j = 0; j < n; j++)  
        { 
            if (table[i][j] == 0)  
            { 
                row = i; 
                column = j; 
                isEmpty = false;  
                break; 
            } 
        } 
        if (!isEmpty) 
        { 
            break; 
        } 
    } 
  
    if (isEmpty)  
    { 
        return true; 
    } 
  
    for (let pos = 1; pos <= n; pos++) 
    { 
        if (squares(table, row, column, pos)) 
        { 
            table[row][column] = pos; 
            if (solver(table, n))  
            { 
              return table; 
            }  
            else
            { 
              table[row][column] = 0; 
            } 
        } 
    } 
    return false; 
  }

  function squares(table, row, column, pos){
    for (let t = 0; t < table.length; t++)  
    { 
        if (table[row][t] == pos)  
        { 
            return false; 
        } 
    } 

    for (let r = 0; r < table.length; r++) 
    { 
        if (table[r][column] == pos) 
        { 
            return false; 
        } 
    } 
    let sqrt = Math.sqrt(table.length); 
    let sqrow = row - row % sqrt; 
    let sqcol = column - column % sqrt; 
  
    for (let r = sqrow; r < sqrow + sqrt; r++)  
    { 
        for (let d = sqcol; d < sqcol + sqrt; d++)  
        { 
            if (table[r][d] == pos)  
            { 
                return false; 
            } 
        } 
    } 
    return true; 
  }


  let table = matrix;
  let n = table.length; 
  let answer = solver(table, n)
  return answer;

}



