package br.com.tokiomarine.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;

import br.com.tokiomarine.entity.Operacao;
import br.com.tokiomarine.entity.RegraOperacao;
import br.com.tokiomarine.repository.RegraOperacaoRepository;

public class RegraOperacaoService {
	
	@Autowired
	private RegraOperacaoRepository regraOperacaoRepository;
	
	public List<RegraOperacao> findByOperacao(Operacao operacao) {
		return regraOperacaoRepository.findByOperacao(operacao);
	}
	
	public RegraOperacao salvar(RegraOperacao regraOperacao) {
		return regraOperacaoRepository.save(regraOperacao);
	}
	
	public List<RegraOperacao> listarVigentes() {
		return regraOperacaoRepository.findByOperacaoVigenteIsTrue();
	}
	
	public List<RegraOperacao> listar() {
		return regraOperacaoRepository.findAll();
	}
	
}
