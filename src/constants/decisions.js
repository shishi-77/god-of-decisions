const decisions = [
  {
    vi: "Mở lòng đón nhận",
    en: "Open your heart",
  },
  {
    vi: "Thứ bạn kỳ vọng sẽ khiến bạn thất vọng",
    en: "What you expect will disappoint you",
  },
  {
    vi: "Tận dụng trí tưởng tượng",
    en: "Use your imagination",
  },
  {
    vi: "Chuyện không như bạn nghĩ",
    en: "Not what you think",
  },
  {
    vi: "Vượt tầm kiểm soát của bạn",
    en: "Out of control",
  },
  {
    vi: "Đôi khi bạn cần tham vọng hơn",
    en: "Sometimes you need to be more ambitious",
  },
  {
    vi: "Mọi thứ tiến triển tốt",
    en: "Everything is going well",
  },
  {
    vi: "Tìm kiếm sự thật",
    en: "Seek the truth",
  },
  {
    vi: "Cứ đặt cược vào nó",
    en: "Just bet on it",
  },
  {
    vi: "Điểm yếu của bạn sẽ bộc lộ",
    en: "Your weakness will be revealed",
  },
  {
    vi: "Điều tốt đẹp sẽ đến vào lúc bạn không mong đợi",
    en: "Good things come when you don't expect it",
  },
  {
    vi: "Phụ thuộc vào bạn",
    en: "It's up to you",
  },
  {
    vi: "Đặt một mục tiêu mới",
    en: "Set a new goal",
  },
  {
    vi: "Chắc chắn",
    en: "Of course",
  },
  {
    vi: "Cứ tin vào trực giác",
    en: "Trust your intuition",
  },
  {
    vi: "Trong vài tuần tới",
    en: "Within the next few weeks",
  },
  {
    vi: "Bình tĩnh, và suy nghĩ cẩn trọng",
    en: "Keep calm and take your time to think",
  },
  {
    vi: "Bạn sẽ hạnh phúc với những gì đã làm",
    en: "You will be happy with what you did",
  },
  {
    vi: "Kiên trì sẽ được đền đáp",
    en: "Perseverance will pay off",
  },
  {
    vi: "Niềm vui chỉ là tạm thời",
    en: "Happiness is only temporary",
  },
  {
    vi: "Đừng tò mò",
    end: "Curiosity killed the cat",
  },
  {
    vi: "Sắp có bước tiến mới",
    en: "A new step is coming",
  },
  {
    vi: "Bạn cần thích nghi",
    en: "You will need to adapt",
  },
  {
    vi: "Sẽ ổn thôi",
    en: "That will be fine",
  },
  {
    vi: "Buông bỏ và hòa vào dòng chảy",
    en: "Let go and join the flow",
  },
  {
    vi: "Chờ đợi",
    en: "Wait",
  },
  {
    vi: "Tập trung vào điều thực sự quan trọng",
    en: "Focus on what is important",
  },
  {
    vi: "Quyết đoán",
    en: "Be assertive",
  },
  {
    vi: "Loại giải pháp đầu tiên",
    en: "Remove the first solution",
  },
  {
    vi: "Một điều mới mẻ sắp đến",
    en: "Something new is coming",
  },
  {
    vi: "Đừng bỏ qua điều hiển nhiên",
    en: "Don't ignore the obvious",
  },
  {
    vi: "Nghĩ thoáng ra",
    en: "Keep an open mind",
  },
  {
    vi: "Đừng cố chống lại sự thay đổi",
    en: "Don't try to resist the change",
  },
  {
    vi: "Rủi ro rất có thể xảy ra",
    en: "Mishaps are highly probable",
  },
  {
    vi: "Giữ một thái độ tích cực",
    en: "Adopt a positive attitude",
  },
  {
    vi: "Trừ khi bạn chỉ có một mình",
    en: "Unless you're alone",
  },
  {
    vi: "Cứ tận hưởng",
    en:"Just enjoy it",
  },
  {
    vi: "Cái gì nhanh đến thì nhanh đi",
    en: "Easy come, easy go",
  },
  {
    vi: "Xem xét lại cách tiếp cận của bạn",
    en: "Reconsider your approach",
  },
  {
    vi: "Điều đó ảnh hưởng đến cách người khác nhìn nhận bạn",
    en: "It will affect how others see you",
  },
  {
    vi: "Không!",
    en: "No!",
  },
  {
    vi: "Không thuận lợi ở thời điểm này",
    en: "Unfavorable at this time",
  },
  {
    vi: "Quyết liệt",
    en: "Be fierce",
  },
  {
    vi: "Tốt hơn là không kỳ vọng",
    en: "It's better not to expect",
  },
  {
    vi: "Dù bạn làm gì, hệ quả cũng lâu dài",
    en: "Whatever you do the result will be lasting",
  },
  {
    vi: "Thời điểm hoàn hảo",
    en: "Perfect timing",
  },
  {
    vi: "Hạ thấp cái tôi và bạn sẽ được nhiều hơn mất",
    en: "Keep the ego, and it will do you more harm than good",
  },
  {
    vi: "Tốt hơn là tiếp tục chờ đợi",
    en: "It's better to wait",
  },
  {
    vi: "Ngưng phán xét",
    en: "Stop judging",
  },
  {
    vi: "Cười về điều đó",
    en: "Laugh about it",
  },
  {
    vi: "Đừng quá thận trọng",
    en: "Don't be too cautious",
  },
  {
    vi: "Điều đó là sự lãng phí tiền bạc",
    en: "That would be a waste of money",
  },
  {
    vi: "Bạn cần sớm đưa ra quyết định",
    en: "You need to make the decision soon",
  },
  {
    vi: "Đừng để ý kiến của người kh ác ảnh hưởng",
    en: "Don't let other people's opinions affect you",
  },
  {
    vi: "Bạn sẽ phải thỏa hiệp",
    en: "You will have to compromise",
  },
  {
    vi: "Nâng cấp bằng mọi cách bạn có thể",
    en: "Upgrade by any way you can",
  },
  {
    vi: "Can đảm lên",
    en: "Be couragous",
  },
  {
    vi: "Cứ đợi xem chuyện gì sẽ xảy ra",
    en: "See what happens",
  },
  {
    vi: "Giữ nó cho riêng bạn",
    en: "Keep it to yourself",
  },
  {
    vi: "Nó là điều hiển nhiên phải làm",
    en: "It is the obvious thing to do",
  },
  {
    vi: "Cân nhắc lại",
    en: "Reconsider",
  },
  {
    vi: "Đừng đổ lỗi cho chính mình",
    en: "Don't blame yourself",
  }
]

export default decisions