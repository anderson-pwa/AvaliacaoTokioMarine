package br.com.tokiomarine.controller;

import java.util.List;

import org.hibernate.service.spi.ServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.tokiomarine.entity.Operacao;
import br.com.tokiomarine.service.OperacaoService;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("api/v1/operacao")
@Slf4j
public class OperacaoController {

		@Autowired
		private OperacaoService operacaoService;

		@PostMapping(value="/salvar", consumes = "application/json", produces = "application/json")
		public ResponseEntity<String> save(@RequestBody Operacao operacao) {
			log.info("Início da Operação Salvar");
		    try {
		    	operacao = operacaoService.Salvar(operacao);
		    	return ResponseEntity.ok().build();
		      } catch (ServiceException e) {
		        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
		            .body(e.getMessage());
		      }
		}
		
		@GetMapping("listar")
		public ResponseEntity<List<Operacao>> listAllFields() {
			log.info("Início da Operação Listar");
			List<Operacao> operacaoLista = operacaoService.listar();
			log.info("Final da Operação Listar");
			return new ResponseEntity<>(operacaoLista, HttpStatus.OK);
		}
		
		@GetMapping("listarvigentes")
		public ResponseEntity<List<Operacao>> listAllVigentes() {
			log.info("Início da Operação Listar Vigentes");
			List<Operacao> operacaoLista = operacaoService.retornaOperacoesVigentes();
			log.info("Final da Operação Listar Vigentes");
			return new ResponseEntity<>(operacaoLista, HttpStatus.OK);
		}
		
		@GetMapping("listarvigente")
		public ResponseEntity<Operacao> listarVigente(@RequestParam String nome) {
			log.info("Início da Operação Listar Vigente");
			Operacao operacao = operacaoService.retornaOperacaoVigente(nome);
			log.info("Final da Operação Listar Vigente");
			return new ResponseEntity<>(operacao, HttpStatus.OK);
		}
}
