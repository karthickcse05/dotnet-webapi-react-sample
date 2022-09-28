using NUnit.Framework;
using System.Data;

namespace ExamCenterDALTest
{
    public class Tests
    {
        [SetUp]
        public void Setup()
        {
        }

        [Test]
        public void Test1()
        {
            Assert.Pass();
        }

        [Test]
        public void TestGetExamCentre()
        {
            ExamCenterDAL.ExamCenter examCenter = new ExamCenterDAL.ExamCenter();
            DataTable dt = examCenter.getExamCenter("");
            Assert.That(dt.Rows.Count > 0);
        }
    }
}