package com.ifood.demo.order;

import java.util.Date;
import java.util.List;
import java.util.UUID;

import javax.persistence.Id;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@Document
@RequiredArgsConstructor
public class Order {	
	
	private @Id UUID id = UUID.randomUUID();
	private final UUID clientId = null;
	private final UUID restaurantId = null;
	private final Date createdAt = new Date();
	private final Date confirmedAt = new Date();	
	private final List<Item> items = null;
	
	@Data
	@RequiredArgsConstructor
	public static class Item {

		public Item(String string, int i, double d) {
			this.description = "";
			this.price = null;
			this.quantity = null;
			// TODO Auto-generated constructor stub
		}
		private final String description;
		private final Integer quantity;		
		private final Double price;
	}

	public Object getId() {
		// TODO Auto-generated method stub
		return null;
	}
}
