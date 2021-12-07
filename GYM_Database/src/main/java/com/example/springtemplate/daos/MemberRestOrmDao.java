package com.example.springtemplate.daos;

import com.example.springtemplate.models.Member;
import com.example.springtemplate.repositories.MemberRestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class MemberRestOrmDao {
    @Autowired
    MemberRestRepository MemberRepository;

    @PostMapping("/api/member")
    public Member createMember(@RequestBody Member member) {
        return MemberRepository.save(member);
    }

    @GetMapping("/api/member")
    public List<Member> findAllMembers() {
        return MemberRepository.findAllMembers();
    }

    @GetMapping("/api/member/{Id}")
    public Member findMemberById(
            @PathVariable("Id") Integer id) {
        return MemberRepository.findMemberById(id);
    }

    @PutMapping("/api/member/{Id}")
    public Member updateMember(
            @PathVariable("Id") Integer id,
            @RequestBody Member memberUpdates) {
        Member member = MemberRepository.findMemberById(id);
        member.setMembership_id(memberUpdates.getMembership_id());
        member.setUserType(memberUpdates.getUserType());
        member.setFirstName(memberUpdates.getFirstName());
        member.setLastName(memberUpdates.getLastName());
        member.setUsername(memberUpdates.getUsername());
        member.setPassword(memberUpdates.getPassword());
        member.setEmail(memberUpdates.getEmail());
        member.setDob(memberUpdates.getDob());
        return MemberRepository.save(member);
    }

    @DeleteMapping("/api/member/{Id}")
    public void deleteMember(
            @PathVariable("Id") Integer id) {
        MemberRepository.deleteById(id);
    }
}
