package br.com.pwatraining.template.test;

import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;

import br.com.tokiomarine.entity.Agendamento;



@RunWith(SpringRunner.class)
@ContextConfiguration(classes = PrincipalTestes.class)
public class BasicIntegrationConfigurationTest {
    
    @Test
    public void testePrazos() {
    	
    	Agendamento agendamentoPrazo_0 = new Agendamento();
		
    	agendamentoPrazo_0.setContaDestino("111111");
    	agendamentoPrazo_0.setContaOrigem("222222");
    	agendamentoPrazo_0.setDataAgendamento("06/03/2012");
    	agendamentoPrazo_0.setDataTransferencia("06/03/2012");
    	agendamentoPrazo_0.setValorTransferencia(100D);
    	//agendamentoPrazo_0.setTaxaAplicada());
    	
    	double taxaAplicada = Math.round(agendamentoPrazo_0.getTaxaAplicada() * 100) / 100.0;
    	
    	assertTrue(taxaAplicada == 6d );
    	
    	Agendamento agendamentoPrazo_10 = new Agendamento();
		
    	agendamentoPrazo_10.setContaDestino("111111");
    	agendamentoPrazo_10.setContaOrigem("222222");
    	agendamentoPrazo_10.setDataAgendamento("06/03/2012");
    	agendamentoPrazo_10.setDataTransferencia("16/03/2012");
    	agendamentoPrazo_10.setValorTransferencia(1200D);
    	//agendamentoPrazo_10.setTaxaAplicada(MotorCalculoUtil.calcularTaxa(agendamentoPrazo_10));
    	
    	//taxaAplicada = Math.round(agendamentoPrazo_10.getTaxaAplicada() * 100) / 100.0;
    	
    	assertTrue(taxaAplicada == 12d );   	
    	
    	Agendamento agendamentoPrazo_10_mais = new Agendamento();
		
    	agendamentoPrazo_10_mais.setContaDestino("111111");
    	agendamentoPrazo_10_mais.setContaOrigem("222222");
    	agendamentoPrazo_10_mais.setDataAgendamento("06/03/2012");
    	agendamentoPrazo_10_mais.setDataTransferencia("18/03/2012");
    	agendamentoPrazo_10_mais.setValorTransferencia(900D);
    	//agendamentoPrazo_10_mais.setTaxaAplicada(MotorCalculoUtil.calcularTaxa(agendamentoPrazo_10_mais));
    	
    	//taxaAplicada = Math.round(agendamentoPrazo_10.getTaxaAplicada() * 100) / 100.0;
    	
    	assertTrue(taxaAplicada == 6d ); 
   	
    }

}