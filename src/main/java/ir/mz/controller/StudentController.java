package ir.mz.controller;

import ir.mz.model.Student;
import ir.mz.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/student")
public class StudentController {
    @Autowired
    private StudentRepository studentRepository;
    @GetMapping("/get")
    public Student getStudent() {
        Student student = new Student();
        student.setName("Ali");
        student.setLastName("Alavi");
    return student;
    }

    @PostMapping("/save")
    public Long save(@RequestBody Student student) {
        studentRepository.save(student);
        return -1L;
    }
}
