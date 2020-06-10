package com.example.cs455020su1jannunziserverjava.controllers;

import com.example.cs455020su1jannunziserverjava.models.Widget;
import com.example.cs455020su1jannunziserverjava.services.WidgetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class WidgetController {

    /*
    CRUD
    C - Create - done
    R - Read - done
    U - Update - done
    D - Delete - done
     */

    @Autowired
    WidgetService widgetService;

    @PutMapping("/api/widgets/{wid}")
    public Widget updateWidget(
            @PathVariable("wid") Integer widgetId,
            @RequestBody Widget updatedWidget) {
        return widgetService.updateWidget(widgetId, updatedWidget);
    }

    @PostMapping("/api/widgets")
    public Widget createStandaloneWidget(
            @RequestBody Widget newWidget) {
        return widgetService.createWidget(newWidget);
    }

    @PostMapping("/api/topics/{tid}/widgets")
    public Widget createWidget(
            @PathVariable("tid") String topicId,
            @RequestBody Widget newWidget) {
        newWidget.setTopicId(topicId);
        return widgetService.createWidget(newWidget);
    }

    @GetMapping("/api/widgets")
    public List<Widget> findAllWidgets() {
        return widgetService.findAllWidgets();
    }

    @GetMapping("/api/widgets/{widgetId}")
    public Widget findWidgetById(
            @PathVariable("widgetId") Integer wid) {
        return widgetService.findWidgetById(wid);
    }

    @DeleteMapping("/api/widgets/{widgetId}")
    public List<Widget> deleteWidget(
            @PathVariable("widgetId") Integer wid) {
        return widgetService.deleteWidget(wid);
    }

    @GetMapping("/api/topics/{topicId}/widgets")
    public List<Widget> findWidgetsForTopic(
            @PathVariable("topicId") String tid) {
        return widgetService.findWidgetsForTopic(tid);
    }
}
