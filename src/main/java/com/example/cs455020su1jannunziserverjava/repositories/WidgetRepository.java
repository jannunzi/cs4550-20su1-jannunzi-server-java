package com.example.cs455020su1jannunziserverjava.repositories;

import com.example.cs455020su1jannunziserverjava.models.Widget;
import org.springframework.data.repository.CrudRepository;

public interface WidgetRepository
        extends CrudRepository<Widget, Integer> {
}
