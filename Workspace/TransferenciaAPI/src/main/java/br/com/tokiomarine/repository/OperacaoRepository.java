package br.com.tokiomarine.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.tokiomarine.entity.Operacao;

public interface OperacaoRepository extends JpaRepository<Operacao, Long> {
	List<Operacao> findOperacoesByNomeAndVigente(String nome, Integer vigente);
	List<Operacao> findByVigenteIsTrueOrderByNome();
	Operacao findByNomeAndVigenteIsTrue(String nome);
}
