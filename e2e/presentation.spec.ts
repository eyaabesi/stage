import { test, expect } from '@playwright/test';

test.describe('PFE Presentation Navigation and Visual Verification in French', () => {
  test('should load the presentation stage and navigate all French slides', async ({ page }) => {
    test.setTimeout(45000);
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);
    
    // Check page title
    await expect(page).toHaveTitle(/PIXII SCOOTER AI/);

    // Verify stage frame exists
    const stage = page.locator('.presentation-stage');
    await expect(stage).toBeVisible();

    // Verify slide 1 (Cover)
    await expect(page.getByRole('heading', { name: 'PIXII SCOOTER AI' })).toBeVisible();
    await expect(page.getByText('SOUTENANCE DE PROJET DE FIN D\'ÉTUDES')).toBeVisible();
    await expect(page.getByText('Soutenance 2026')).toBeVisible();

    const nextButton = page.getByRole('button', { name: 'Diapositive suivante' });
    await expect(nextButton).toBeVisible();

    // Navigate to slide 2 (Agenda)
    await nextButton.click();
    await expect(page.getByRole('heading', { name: 'Structure de la Soutenance' })).toBeVisible({ timeout: 10000 });

    // Navigate through agenda fragments (6 sub-steps)
    for (let i = 0; i < 6; i++) {
      await page.keyboard.press('ArrowRight');
    }

    // Slide 3: Problem
    await expect(page.getByRole('heading', { name: '3 Défis Majeurs de la Mobilité Urbaine' })).toBeVisible();

    // Navigate through problem fragments (3 sub-steps)
    for (let i = 0; i < 3; i++) {
      await page.keyboard.press('ArrowRight');
    }

    // Slide 4: Methodology
    await expect(page.getByRole('heading', { name: 'Scrum, adapté au travail individuel' })).toBeVisible();

    // Navigate through methodology fragments (4 sub-steps)
    for (let i = 0; i < 4; i++) {
      await page.keyboard.press('ArrowRight');
    }

    // Slide 5: Architecture
    await expect(page.getByRole('heading', { name: 'Architecture Modulaire et Événementielle en 5 Couches' })).toBeVisible();

    // Navigate through architecture fragments (5 sub-steps)
    for (let i = 0; i < 5; i++) {
      await page.keyboard.press('ArrowRight');
    }

    // Slide 6: Mockup
    await expect(page.getByRole('heading', { name: 'Interface de Supervision & IA Embarquée' })).toBeVisible();
    await expect(page.getByText('Démo en direct')).toBeVisible();

    // Navigate to Slide 7: Evidence
    await page.keyboard.press('ArrowRight');
    await expect(page.getByRole('heading', { name: 'Matrice de Conformité du Cahier des Charges' })).toBeVisible();

    // Navigate through evidence fragments (4 sub-steps)
    for (let i = 0; i < 4; i++) {
      await page.keyboard.press('ArrowRight');
    }

    // Slide 8: Conclusion
    await expect(page.getByRole('heading', { name: 'Bilan du Projet & Évolutions Futures' })).toBeVisible();
    await expect(page.getByText('Merci de votre attention')).toBeVisible();
  });
});
