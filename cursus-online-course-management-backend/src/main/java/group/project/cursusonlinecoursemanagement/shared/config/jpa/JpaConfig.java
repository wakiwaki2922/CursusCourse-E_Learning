package group.project.cursusonlinecoursemanagement.shared.config.jpa;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@Configuration
@EnableJpaAuditing(auditorAwareRef = "auditAwareImpl")
public class JpaConfig {
}
