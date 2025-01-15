// Payment Module - August
class PaymentProcessor {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.transactions = [];
  }

  processPayment(amount, cardToken) {
    const transaction = {
      id: Math.random().toString(36).substr(2, 9),
      amount: amount,
      status: 'completed',
      timestamp: new Date()
    };
    this.transactions.push(transaction);
    return transaction;
  }

  refund(transactionId) {
    return { success: true, refundedTransactionId: transactionId };
  }

  getTransactions() { return this.transactions; }
}

module.exports = PaymentProcessor;
