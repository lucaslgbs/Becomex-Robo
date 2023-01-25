import { Component } from '@angular/core';
import { RoboPosicoes } from 'src/models/robo';
import { RoboService } from './services/robo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Becomex-Robo';

  robo?: RoboPosicoes;

  constructor(private roboService: RoboService) {
  
  }

  ngOnInit(): void {
    this.roboService.getPosicoesRobo().subscribe((responce) =>{
      this.robo = responce;
    }, 
    (error) => {
    });
  }

  movimentarPulso(hemisferio: number, sentido: number) {
    this.roboService.movimentarPulso(hemisferio, sentido).subscribe((responce) =>{
      this.robo = responce;
    }, 
    (error) => {
    });
  }

  movimentarCotovelo(hemisferio: number, sentido: number) {
    this.roboService.movimentarCotovelo(hemisferio, sentido).subscribe((responce) =>{
      this.robo = responce;
    }, 
    (error) => {
    });
  }

  rotacionarCabeca(sentido: number) {
    this.roboService.rotacionarCabeca(sentido).subscribe((responce) =>{
      this.robo = responce;
    }, 
    (error) => {
    });
  }

  inclinarCabeca(sentido: number) {
    this.roboService.inclinarCabeca(sentido).subscribe((responce) =>{
      this.robo = responce;
    }, 
    (error) => {
    });
  }

}
