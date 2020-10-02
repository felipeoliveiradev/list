package com.ifood.demo.client.resoucers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.ifood.demo.client.model.Client;
import com.ifood.demo.client.repository.ClientRepository;

@RestController
@RequestMapping("/client")
public class ClientResources{
	
	@Autowired
	private ClientRepository cr;
	
	
	@GetMapping(produces="application/json")
	public @ResponseBody Iterable<Client> listClients() {
		Iterable<Client> listClient = cr.findAll();
		return listClient;
	}
	
	@PostMapping()
	public Client registerClient(@RequestBody Client client) {
		return cr.save(client);
	}
	
}
