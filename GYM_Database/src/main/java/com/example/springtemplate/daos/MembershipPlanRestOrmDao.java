package com.example.springtemplate.daos;


import com.example.springtemplate.models.domainMembershipPlan;
import com.example.springtemplate.repositories.MembershipPlanRestRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class MembershipPlanRestOrmDao {
    @Autowired
    MembershipPlanRestRepository membershipPlanRepository;

    @PostMapping("/api/membership_plan")
    public domainMembershipPlan createMembershipId(@RequestBody domainMembershipPlan membership_id) {
        return membershipPlanRepository.save(membership_id);
    }

    @GetMapping("/api/membership_plan")
    public List<domainMembershipPlan> findAllMembershipIds() {
        return membershipPlanRepository.findAllMembershipIds();
    }

    @GetMapping("/api/membership_plan/{Id}")
    public domainMembershipPlan findMembershipById(
            @PathVariable("Id") Integer id) {
        return membershipPlanRepository.findMembershipIdById(id);
    }

    @PutMapping("/api/membership_plan/{Id}")
    public domainMembershipPlan updateMembership(
            @PathVariable("Id") Integer id,
            @RequestBody domainMembershipPlan membershipPlanUpdates) {
        domainMembershipPlan membershipPlan = membershipPlanRepository.findMembershipIdById(id);
        membershipPlan.setMembership_type(membershipPlanUpdates.getMembership_type());
        membershipPlan.setMembership_description(membershipPlanUpdates.getMembership_description());
        membershipPlan.setMembership_cost(membershipPlanUpdates.getMembership_cost());
        return membershipPlanRepository.save(membershipPlan);
    }

    @DeleteMapping("/api/membership_plan/{Id}")
    public void deleteMembership(
            @PathVariable("Id") Integer id) {
        membershipPlanRepository.deleteById(id);
    }
}
