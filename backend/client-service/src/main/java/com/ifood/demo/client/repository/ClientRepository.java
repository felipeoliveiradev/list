package com.ifood.demo.client.repository;

import java.util.Collection;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RestResource;

import com.ifood.demo.client.model.Client;


public interface ClientRepository extends JpaRepository<Client, String> {
}