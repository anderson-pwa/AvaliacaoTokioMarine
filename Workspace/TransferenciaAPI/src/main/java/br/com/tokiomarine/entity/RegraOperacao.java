package br.com.tokiomarine.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Table(name="regraoperacao")
@Entity
@Data
public class RegraOperacao {
	
	@Id
	@GeneratedValue
	private Long id;
	
	@ManyToOne
	private Operacao 	operacao;
	private Integer		prazoInicial;
	private Integer		prazoFinal;
	private Double		valorInicial;
	private Double		valorFinal;
	private Double		taxa;
	private Double		juros;
	
	@ManyToOne
	private Operacao	operacaoSecundaria;
}
