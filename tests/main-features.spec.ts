import { test, expect } from '@playwright/test';

test.describe('PsychoNauka App', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('login screen displays correctly', async ({ page }) => {
    await expect(page.locator('h1')).toContainText('PsychoNauka');
    await expect(page.locator('input#username')).toBeVisible();
    await expect(page.locator('button[type="submit"]')).toContainText('Rozpocznij naukę');
    await page.screenshot({ path: `screenshots/${test.info().project.name}/01-login-screen.png` });
  });

  test('user can login with username', async ({ page }) => {
    await page.fill('input#username', 'TestUser');
    await page.click('button[type="submit"]');

    // Should see dashboard with Materials view by default
    await expect(page.locator('header h2')).toContainText('Materiały');
    await page.screenshot({ path: `screenshots/${test.info().project.name}/02-dashboard-materials.png` });
  });

  test('sidebar toggle works', async ({ page }) => {
    // Login first
    await page.fill('input#username', 'TestUser');
    await page.click('button[type="submit"]');
    await page.waitForSelector('header h2');

    // Click hamburger to open sidebar
    await page.locator('button.fixed.z-50').click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: `screenshots/${test.info().project.name}/03-sidebar-open.png` });

    // Click again to close
    await page.locator('button.fixed.z-50').click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: `screenshots/${test.info().project.name}/04-sidebar-closed.png` });
  });

  test('materials view - navigate chapters', async ({ page }) => {
    await page.fill('input#username', 'TestUser');
    await page.click('button[type="submit"]');
    await page.waitForSelector('header h2');

    // Open sidebar and go to Materials
    await page.locator('button.fixed.z-50').click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Materiały' }).click();
    await page.waitForTimeout(500);

    // Take screenshot of first section
    await page.screenshot({ path: `screenshots/${test.info().project.name}/05-materials-chapter1.png` });

    // Navigate to next section
    await page.getByRole('button', { name: 'Następna' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: `screenshots/${test.info().project.name}/06-materials-section2.png` });

    // Change chapter via dropdown
    const chapterSelect = page.locator('select').first();
    await chapterSelect.selectOption({ index: 1 });
    await page.waitForTimeout(500);
    await page.screenshot({ path: `screenshots/${test.info().project.name}/07-materials-chapter11.png` });
  });

  test('quiz mode - answer questions', async ({ page }) => {
    await page.fill('input#username', 'TestUser');
    await page.click('button[type="submit"]');
    await page.waitForSelector('header h2');

    // Open sidebar and go to Quiz
    await page.locator('button.fixed.z-50').click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Quiz' }).click();
    await page.waitForTimeout(500);

    // Screenshot of first question
    await page.screenshot({ path: `screenshots/${test.info().project.name}/08-quiz-question1.png` });

    // Answer first question (click first answer option with A label)
    await page.locator('button:has-text("A")').first().click();
    await page.waitForTimeout(300);

    // Submit answer
    await page.getByRole('button', { name: 'Zatwierdź odpowiedź' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: `screenshots/${test.info().project.name}/09-quiz-answer-result.png` });

    // Go to next question
    await page.getByRole('button', { name: 'Następne pytanie' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: `screenshots/${test.info().project.name}/10-quiz-question2.png` });
  });

  test('quiz mode - go through 5 questions', async ({ page }) => {
    await page.fill('input#username', 'QuizTester');
    await page.click('button[type="submit"]');
    await page.waitForSelector('header h2');

    // Open sidebar and go to Quiz
    await page.locator('button.fixed.z-50').click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Quiz' }).click();
    await page.waitForTimeout(500);

    // Answer 5 questions
    for (let i = 1; i <= 5; i++) {
      await page.screenshot({ path: `screenshots/${test.info().project.name}/quiz-q${i}-before.png` });

      // Click answer A
      await page.locator('button:has-text("A")').first().click();
      await page.waitForTimeout(200);

      // Submit
      await page.getByRole('button', { name: 'Zatwierdź odpowiedź' }).click();
      await page.waitForTimeout(300);
      await page.screenshot({ path: `screenshots/${test.info().project.name}/quiz-q${i}-after.png` });

      // Next question
      const nextBtn = page.getByRole('button', { name: /Następne pytanie|Zakończ/ });
      await nextBtn.click();
      await page.waitForTimeout(300);
    }
  });

  test('exam mode - start and complete', async ({ page }) => {
    await page.fill('input#username', 'ExamTester');
    await page.click('button[type="submit"]');
    await page.waitForSelector('header h2');

    // Open sidebar and go to Exam mode
    await page.locator('button.fixed.z-50').click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Tryb Egzaminu' }).click();
    await page.waitForTimeout(500);

    // Screenshot of exam start screen
    await page.screenshot({ path: `screenshots/${test.info().project.name}/11-exam-start.png` });

    // Start exam
    await page.getByRole('button', { name: 'Rozpocznij egzamin' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: `screenshots/${test.info().project.name}/12-exam-question1.png` });

    // Answer a few questions quickly
    for (let i = 0; i < 3; i++) {
      const optionA = page.locator('button:has-text("A")').first();
      if (await optionA.isVisible()) {
        await optionA.click();
        await page.waitForTimeout(200);
        await page.getByRole('button', { name: 'Zatwierdź odpowiedź' }).click();
        await page.waitForTimeout(200);
        const nextBtn = page.getByRole('button', { name: /Następne pytanie|Zakończ/ });
        await nextBtn.click();
        await page.waitForTimeout(200);
      }
    }
    await page.screenshot({ path: `screenshots/${test.info().project.name}/13-exam-progress.png` });
  });

  test('statistics view', async ({ page }) => {
    await page.fill('input#username', 'StatsTester');
    await page.click('button[type="submit"]');
    await page.waitForSelector('header h2');

    // First answer some questions to have stats
    await page.locator('button.fixed.z-50').click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Quiz' }).click();
    await page.waitForTimeout(500);

    // Answer 2 questions
    for (let i = 0; i < 2; i++) {
      await page.locator('button:has-text("A")').first().click();
      await page.getByRole('button', { name: 'Zatwierdź odpowiedź' }).click();
      await page.waitForTimeout(200);
      const nextBtn = page.getByRole('button', { name: /Następne pytanie|Zakończ/ });
      await nextBtn.click();
      await page.waitForTimeout(200);
    }

    // Go to Statistics
    await page.locator('button.fixed.z-50').click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Statystyki' }).click();
    await page.waitForTimeout(500);

    await page.screenshot({ path: `screenshots/${test.info().project.name}/14-statistics.png` });
  });

  test('ranking view', async ({ page }) => {
    await page.fill('input#username', 'RankingTester');
    await page.click('button[type="submit"]');
    await page.waitForSelector('header h2');

    // Go to Ranking
    await page.locator('button.fixed.z-50').click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Ranking' }).click();
    await page.waitForTimeout(500);

    await page.screenshot({ path: `screenshots/${test.info().project.name}/15-ranking.png` });
  });

  test('logout functionality', async ({ page }) => {
    await page.fill('input#username', 'LogoutTester');
    await page.click('button[type="submit"]');
    await page.waitForSelector('header h2');

    // Open sidebar and logout
    await page.locator('button.fixed.z-50').click();
    await page.waitForTimeout(300);

    // Click logout button
    await page.getByRole('button', { name: 'Wyloguj się' }).click();
    await page.waitForTimeout(500);

    // Should be back at login screen
    await expect(page.locator('input#username')).toBeVisible();
    await page.screenshot({ path: `screenshots/${test.info().project.name}/16-logged-out.png` });
  });

  test('UI overview - full app flow', async ({ page }) => {
    // Login
    await page.fill('input#username', 'FullTestUser');
    await page.screenshot({ path: `screenshots/${test.info().project.name}/flow-01-login.png` });
    await page.click('button[type="submit"]');
    await page.waitForSelector('header h2');

    // Materials
    await page.screenshot({ path: `screenshots/${test.info().project.name}/flow-02-materials.png` });

    // Open sidebar
    await page.locator('button.fixed.z-50').click();
    await page.waitForTimeout(400);
    await page.screenshot({ path: `screenshots/${test.info().project.name}/flow-03-sidebar.png` });

    // Quiz
    await page.getByRole('button', { name: 'Quiz' }).click();
    await page.waitForTimeout(400);
    await page.screenshot({ path: `screenshots/${test.info().project.name}/flow-04-quiz.png` });

    // Exam
    await page.locator('button.fixed.z-50').click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Tryb Egzaminu' }).click();
    await page.waitForTimeout(400);
    await page.screenshot({ path: `screenshots/${test.info().project.name}/flow-05-exam.png` });

    // Stats
    await page.locator('button.fixed.z-50').click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Statystyki' }).click();
    await page.waitForTimeout(400);
    await page.screenshot({ path: `screenshots/${test.info().project.name}/flow-06-stats.png` });

    // Ranking
    await page.locator('button.fixed.z-50').click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Ranking' }).click();
    await page.waitForTimeout(400);
    await page.screenshot({ path: `screenshots/${test.info().project.name}/flow-07-ranking.png` });
  });
});
