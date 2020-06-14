import { getCustomRepository } from 'typeorm';

import AppError from '../errors/AppError';

import TransactionsRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionsReporsitory = getCustomRepository(TransactionsRepository);

    const transaction = await transactionsReporsitory.findOne(id);

    if (!transaction) {
      throw new AppError('Transaction does not exist');
    }

    await transactionsReporsitory.remove(transaction);
  }
}

export default DeleteTransactionService;
