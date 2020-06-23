import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { Board } from './../src/sudoku-checker.js';

$(document).ready(function() {
  $("form#sudoku").submit(function(event){
    event.preventDefault();
    let board = new Board();
    $("input").each(function() {
      let id = this.getAttribute("id");
      board[id[0]][id[1]].value = this.value;
    }); 
    if (board.checkAllRowsCols() && board.checkAllGrids()) {
      $("#output").text("Your solution is correct!");
    } else {
      $("#output").text("Your solution is not correct!");
    }
  });
});