package br.com.tokiomarine.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.tokiomarine.entity.Agendamento;

public interface AgendamentoRepository extends JpaRepository<Agendamento, Long> {
}
