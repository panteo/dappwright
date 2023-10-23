import { Page } from 'playwright-core';

import { performPopupAction } from './util';

export const approveSpending = (page: Page) => async (): Promise<void> => {
  await performPopupAction(page, async (popup) => {
    await popup.getByTestId('page-container-footer-next').click(); // Next
    await popup.getByTestId('page-container-footer-next').click(); // Approve
  });
};
