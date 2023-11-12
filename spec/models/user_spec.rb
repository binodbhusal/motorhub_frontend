require 'rails_helper'

RSpec.describe User, type: :model do
  before(:all) do
    @user = create(:user)
  end

  it 'is valid with valid attributes' do
    expect(@user).to be_valid
  end

  it 'is not valid without a password' do
    @user.password = nil
    expect(@user).not_to be_valid
  end
  it 'not valid with Invalid email' do
    @user.email = 'john-example.com'
    expect(@user).not_to be_valid
  end
end
