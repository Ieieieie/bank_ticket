class TicketController < ApplicationController
  before_action :find_ticket, only:[:show, :edit, :update, :destroy, :transfer]

  def index
    @tickets = Ticket.order(:deadline)
  end

  def new 
    @ticket = Ticket.new
  end

  def create
    @ticket = Ticket.new(ticket_params)
    if @ticket.save
      redirect_to root_path, notice: '発券が完了しました。'
    else
      redirect_to root_path, alert: '発券に失敗しました。'
    end
  end

  def show
  end

  def edit
  end

  def update
    if @ticket.update(ticket_params)
      redirect_to root_path, notice: '更新できました。'
    else
      render :edit, alert: '更新できませんでした。'
    end
  end

  def destroy
    if @ticket.destroy
      redirect_to root_path, notice: '削除に成功しました。'
    else
      redirect_to root_path, alert: '削除に失敗しました。'
    end
  end

  def transfer
    if @ticket.update(pay_judgment: true)
      redirect_to root_path, notice: '振込を完了しました。'
    else
      redirect_to root_path, alert: '振込に失敗しました。'
    end
  end

  def paid
    @tickets = Ticket.where(pay_judgment: true).order(:deadline)
  end

  private

  def find_ticket
    @ticket = Ticket.find(params[:id])
  end

  def ticket_params
    params[:ticket].permit(:bank_name, :branch_name, :deposit_type, :account_number, :account_name, :amount, :deadline, :pay_judgment)
  end

end
